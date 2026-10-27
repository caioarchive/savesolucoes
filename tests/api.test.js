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
