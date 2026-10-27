import assert from "node:assert/strict";
import test from "node:test";

import { handleLead } from "../lib/api.js";

const env = {
  RESEND_API_KEY: "re_test_key",
  RESEND_FROM_EMAIL: "Save Soluções <site@example.com>",
  RESEND_TO_EMAIL: "teste@example.com",
};

const validContact = {
  nome: "Maria Silva",
  telefone: "82999998888",
  email: "maria@example.com",
  assunto: "Assessoria contábil",
  mensagem: "Gostaria de conversar sobre os serviços da Save.",
  autorizacao: "sim",
};

function request(body) {
  return new Request("https://example.com/api/contato", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

test("retorna sucesso somente quando o Resend aceita o envio", async () => {
  let providerRequest;
  const fetchImpl = async (url, options) => {
    providerRequest = { url, options };
    return Response.json({ id: "email_123" }, { status: 200 });
  };

  const response = await handleLead(request(validContact), "contato", {
    env,
    fetchImpl,
  });
  const result = await response.json();

  assert.equal(response.status, 200);
  assert.match(result.message, /sucesso/i);
  assert.equal(providerRequest.url, "https://api.resend.com/emails");
  assert.equal(
    providerRequest.options.headers.Authorization,
    "Bearer re_test_key",
  );

  const email = JSON.parse(providerRequest.options.body);
  assert.deepEqual(email.to, ["teste@example.com"]);
  assert.equal(email.reply_to, validContact.email);
  assert.match(email.text, /Maria Silva/);
  assert.match(email.html, /SAVE SOLUÇÕES/);
  assert.match(email.html, /Novo contato pelo site/);
  assert.match(email.html, /Recebido em .*horário de Maceió/);
  assert.match(email.html, /Contato autorizado/);
  assert.match(email.html, /\(82\) 99999-8888/);
  assert.match(email.html, /max-width:640px/);
});

test("escapa conteúdo dinâmico no HTML e mantém texto simples", async () => {
  let email;
  const message =
    'Gostaria de conversar <script>alert("oi")</script>\nSegunda linha';

  const response = await handleLead(
    request({ ...validContact, mensagem: message }),
    "contato",
    {
      env,
      fetchImpl: async (_url, options) => {
        email = JSON.parse(options.body);
        return Response.json({ id: "email_escaped" });
      },
    },
  );

  assert.equal(response.status, 200);
  assert.match(email.text, /<script>alert\("oi"\)<\/script>\nSegunda linha/);
  assert.doesNotMatch(email.html, /<script>/);
  assert.match(
    email.html,
    /&lt;script&gt;alert\(&quot;oi&quot;\)&lt;\/script&gt;<br>Segunda linha/,
  );
});

test("formata o CNPJ no HTML da solicitação de migração", async () => {
  let email;
  const response = await handleLead(
    request({
      razaoSocial: "Empresa Exemplo Ltda",
      cnpj: "11222333000181",
      tipoEmpresa: "LTDA",
      telefone: "8234351890",
      email: "empresa@example.com",
      mensagem: "Quero migrar a contabilidade.",
      autorizacao: "sim",
    }),
    "migrar-contabilidade",
    {
      env,
      fetchImpl: async (_url, options) => {
        email = JSON.parse(options.body);
        return Response.json({ id: "email_migracao" });
      },
    },
  );

  assert.equal(response.status, 200);
  assert.match(email.html, /11\.222\.333\/0001-81/);
  assert.match(email.html, /\(82\) 3435-1890/);
  assert.match(email.text, /CNPJ: 11222333000181/);
});

test("identifica abertura de empresa e formata telefone e celular no HTML", async () => {
  let email;
  const response = await handleLead(
    request({
      nome: "Maria Silva",
      email: "maria@example.com",
      telefone: "8234351890",
      celular: "82999998888",
      segmento: "Prestação de serviços",
      estado: "AL",
      cidade: "Maceió",
      mensagem: "Quero abrir uma empresa.",
      autorizacao: "sim",
    }),
    "abrir-empresa",
    {
      env,
      fetchImpl: async (_url, options) => {
        email = JSON.parse(options.body);
        return Response.json({ id: "email_abertura" });
      },
    },
  );

  assert.equal(response.status, 200);
  assert.match(email.html, /Nova solicitação de abertura de empresa/);
  assert.match(email.html, /\(82\) 3435-1890/);
  assert.match(email.html, /\(82\) 99999-8888/);
  assert.match(email.text, /Telefone: 8234351890/);
});

test("retorna erro quando o Resend rejeita o envio", async () => {
  const response = await handleLead(request(validContact), "contato", {
    env,
    fetchImpl: async () =>
      Response.json({ message: "provider rejected" }, { status: 422 }),
  });
  const result = await response.json();

  assert.equal(response.status, 502);
  assert.match(result.message, /tente novamente/i);
  assert.doesNotMatch(result.message, /provider rejected/i);
});

test("não chama o provedor sem consentimento válido", async () => {
  let calls = 0;
  const response = await handleLead(
    request({ ...validContact, autorizacao: "nao" }),
    "contato",
    {
      env,
      fetchImpl: async () => {
        calls += 1;
        return Response.json({ id: "should_not_happen" });
      },
    },
  );

  assert.equal(response.status, 400);
  assert.equal(calls, 0);
});

test("trata resposta de sucesso sem id como falha", async () => {
  const response = await handleLead(request(validContact), "contato", {
    env,
    fetchImpl: async () => Response.json({}, { status: 200 }),
  });

  assert.equal(response.status, 502);
});
