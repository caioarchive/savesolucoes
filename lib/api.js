const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MAX_BODY_LENGTH = 20_000;
const DEFAULT_TIMEOUT_MS = 10_000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\d{10,11}$/;

function textField(name, label, minLength, maxLength) {
  return { name, label, type: "text", minLength, maxLength };
}

function emailField(name, label) {
  return { name, label, type: "email", maxLength: 254 };
}

function phoneField(name, label) {
  return { name, label, type: "phone" };
}

function cnpjField(name, label) {
  return { name, label, type: "cnpj" };
}

function enumField(name, label, values) {
  return { name, label, type: "enum", values };
}

const formConfigs = {
  contato: {
    subject: "Novo contato pelo site | Save Soluções",
    title: "Novo contato pelo site",
    fields: [
      textField("nome", "Nome", 2, 120),
      phoneField("telefone", "Telefone"),
      emailField("email", "E-mail"),
      textField("assunto", "Assunto", 2, 160),
      textField("mensagem", "Mensagem", 5, 4_000),
    ],
  },
  "abrir-empresa": {
    subject: "Nova solicitação de abertura de empresa | Save Soluções",
    title: "Nova solicitação de abertura de empresa",
    fields: [
      textField("nome", "Nome completo", 2, 120),
      emailField("email", "E-mail"),
      phoneField("telefone", "Telefone"),
      phoneField("celular", "Celular"),
      enumField("segmento", "Segmento da empresa", [
        "Prestação de serviços",
        "Prestação de serviços e comércio",
        "Comércio",
        "Comércio e indústria",
        "Indústria",
      ]),
      textField("estado", "Estado", 2, 60),
      textField("cidade", "Cidade", 2, 100),
      textField("mensagem", "Mensagem", 5, 4_000),
    ],
  },
  "migrar-contabilidade": {
    subject: "Nova solicitação de migração contábil | Save Soluções",
    title: "Nova solicitação de migração contábil",
    fields: [
      textField("razaoSocial", "Razão social", 2, 160),
      cnpjField("cnpj", "CNPJ"),
      textField("tipoEmpresa", "Tipo de empresa", 2, 100),
      phoneField("telefone", "Telefone"),
      emailField("email", "E-mail"),
      textField("mensagem", "Mensagem", 5, 4_000),
    ],
  },
};

function json(message, status) {
  return Response.json(
    { message },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

function isValidCnpj(value) {
  if (!/^\d{14}$/.test(value) || /^(\d)\1{13}$/.test(value)) return false;

  const calculateDigit = (length) => {
    let sum = 0;
    let weight = length - 7;

    for (let index = 0; index < length; index += 1) {
      sum += Number(value[index]) * weight;
      weight = weight === 2 ? 9 : weight - 1;
    }

    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  return (
    calculateDigit(12) === Number(value[12]) &&
    calculateDigit(13) === Number(value[13])
  );
}

function readString(body, field) {
  const value = body[field.name];

  if (typeof value !== "string") {
    return { error: `Preencha o campo ${field.label}.` };
  }

  const normalized = value.trim();

  if (!normalized) {
    return { error: `Preencha o campo ${field.label}.` };
  }

  if (
    field.type === "text" &&
    (normalized.length < field.minLength || normalized.length > field.maxLength)
  ) {
    return { error: `Revise o campo ${field.label}.` };
  }

  if (
    field.type === "email" &&
    (normalized.length > field.maxLength || !EMAIL_PATTERN.test(normalized))
  ) {
    return { error: "Informe um e-mail válido." };
  }

  if (field.type === "phone") {
    const digits = normalized.replace(/\D/g, "");
    if (!PHONE_PATTERN.test(digits)) {
      return { error: `Informe um ${field.label.toLowerCase()} válido.` };
    }
    return { value: digits };
  }

  if (field.type === "cnpj") {
    const digits = normalized.replace(/\D/g, "");
    if (!isValidCnpj(digits)) {
      return { error: "Informe um CNPJ válido." };
    }
    return { value: digits };
  }

  if (field.type === "enum" && !field.values.includes(normalized)) {
    return { error: `Selecione uma opção válida em ${field.label}.` };
  }

  return { value: normalized };
}

function validateLead(body, config) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { error: "Dados do formulário inválidos." };
  }

  if (body.autorizacao !== "sim") {
    return {
      error:
        "Autorize o uso dos dados para que a Save possa entrar em contato.",
    };
  }

  const lead = {};

  for (const field of config.fields) {
    const result = readString(body, field);
    if (result.error) return result;
    lead[field.name] = result.value;
  }

  return { lead };
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatEmailValue(name, value) {
  if (name === "cnpj") {
    return value.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5",
    );
  }

  if (name === "telefone" || name === "celular") {
    return value.length === 11
      ? value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")
      : value.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
  }

  return value;
}

function buildEmail(config, lead) {
  const rows = config.fields.map(({ name, label }) => ({
    name,
    label,
    value: lead[name],
  }));

  const text = [
    config.title,
    "",
    ...rows.map(({ label, value }) => `${label}: ${value}`),
    "",
    "Consentimento para contato: autorizado",
  ].join("\n");

  const receivedAt = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Maceio",
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date());

  const htmlRows = rows
    .map(({ name, label, value }) => {
      const formatted = escapeHtml(formatEmailValue(name, value)).replaceAll(
        /\r\n|\r|\n/g,
        "<br>",
      );

      return `<tr><td style="padding:14px 0;border-bottom:1px solid #e7e7e3;vertical-align:top"><div style="color:#6f6f6b;font-size:12px;line-height:18px;font-weight:600">${escapeHtml(label)}</div><div style="padding-top:4px;color:#111111;font-size:15px;line-height:23px;word-break:break-word">${formatted}</div></td></tr>`;
    })
    .join("");

  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(config.title)}</title></head><body style="margin:0;padding:0;background:#f7f7f5;color:#111111;font-family:Arial,Helvetica,sans-serif"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;border-collapse:collapse;background:#f7f7f5"><tr><td align="center" style="padding:28px 12px"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="640" style="width:100%;max-width:640px;border-collapse:separate;border-spacing:0;background:#ffffff;border:1px solid #e7e7e3;border-radius:16px"><tr><td style="padding:30px 32px 24px;border-bottom:1px solid #e7e7e3"><div style="color:#111111;font-size:14px;line-height:20px;font-weight:700;letter-spacing:0.04em">SAVE SOLUÇÕES</div><h1 style="margin:24px 0 10px;color:#111111;font-size:24px;line-height:32px;font-weight:700">${escapeHtml(config.title)}</h1><p style="margin:0;color:#6f6f6b;font-size:13px;line-height:20px">Recebido em ${escapeHtml(receivedAt)} · horário de Maceió</p></td></tr><tr><td style="padding:12px 32px 4px"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;border-collapse:collapse">${htmlRows}</table></td></tr><tr><td style="padding:24px 32px 32px"><span style="display:inline-block;padding:8px 12px;border:1px solid #d6d6d1;border-radius:999px;background:#f7f7f5;color:#262626;font-size:12px;line-height:18px;font-weight:600">Contato autorizado</span></td></tr></table></td></tr></table></body></html>`;

  return { text, html };
}

function parseRecipients(value) {
  if (typeof value !== "string") return [];
  return value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function extractEmail(value) {
  if (typeof value !== "string" || /[\r\n]/.test(value)) return "";
  const match = value.trim().match(/<([^<>]+)>$/);
  return match ? match[1].trim() : value.trim();
}

function getEmailSettings(env) {
  const apiKey = env.RESEND_API_KEY?.trim();
  const from = env.RESEND_FROM_EMAIL?.trim();
  const to = parseRecipients(env.RESEND_TO_EMAIL);

  if (
    !apiKey ||
    !from ||
    !EMAIL_PATTERN.test(extractEmail(from)) ||
    to.length === 0 ||
    to.some((email) => !EMAIL_PATTERN.test(email))
  ) {
    return null;
  }

  return { apiKey, from, to };
}

async function sendWithResend({
  config,
  lead,
  settings,
  fetchImpl,
  timeoutMs,
}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  const content = buildEmail(config, lead);

  try {
    const response = await fetchImpl(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${settings.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: settings.from,
        to: settings.to,
        subject: config.subject,
        reply_to: lead.email,
        text: content.text,
        html: content.html,
      }),
      signal: controller.signal,
    });

    if (!response.ok) return false;

    const result = await response.json().catch(() => null);
    return Boolean(result?.id);
  } finally {
    clearTimeout(timeout);
  }
}

export async function handleLead(request, formType, options = {}) {
  const config = formConfigs[formType];
  if (!config) return json("Formulário inválido.", 404);

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_LENGTH) {
    return json("Os dados enviados excedem o limite permitido.", 413);
  }

  let rawBody;
  let body;

  try {
    rawBody = await request.text();
    if (rawBody.length > MAX_BODY_LENGTH) {
      return json("Os dados enviados excedem o limite permitido.", 413);
    }
    body = JSON.parse(rawBody);
  } catch {
    return json("Não foi possível processar os dados do formulário.", 400);
  }

  const validation = validateLead(body, config);
  if (validation.error) return json(validation.error, 400);

  const env = options.env ?? process.env;
  const settings = getEmailSettings(env);

  if (!settings) {
    return json(
      "O envio está temporariamente indisponível. Tente novamente mais tarde.",
      503,
    );
  }

  try {
    const accepted = await sendWithResend({
      config,
      lead: validation.lead,
      settings,
      fetchImpl: options.fetchImpl ?? fetch,
      timeoutMs: options.timeoutMs ?? DEFAULT_TIMEOUT_MS,
    });

    if (!accepted) {
      return json(
        "Não foi possível enviar suas informações agora. Seus dados foram mantidos; tente novamente.",
        502,
      );
    }

    return json(
      "Informações enviadas com sucesso. A equipe da Save entrará em contato.",
      200,
    );
  } catch {
    return json(
      "Não foi possível enviar suas informações agora. Seus dados foram mantidos; tente novamente.",
      502,
    );
  }
}
