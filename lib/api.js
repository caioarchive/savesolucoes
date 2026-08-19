export async function handleLead(request, requiredFields) {
  try {
    const body = await request.json();
    const missing = requiredFields.some(
      (field) => !String(body[field] || "").trim(),
    );
    if (missing || body.autorizacao !== "sim")
      return Response.json(
        {
          message:
            "Preencha todos os campos obrigatórios e autorize o contato.",
        },
        { status: 400 },
      );
    const email = String(body.email || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return Response.json(
        { message: "Informe um e-mail válido." },
        { status: 400 },
      );
    /* Integração futura: encaminhar `body` para o provedor de e-mail ou CRM apenas no servidor. */ return Response.json(
      {
        message:
          "Recebemos suas informações. A equipe da Save entrará em contato.",
      },
      { status: 200 },
    );
  } catch {
    return Response.json(
      { message: "Não foi possível processar a solicitação." },
      { status: 400 },
    );
  }
}
