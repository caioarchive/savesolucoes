import { handleLead } from "@/lib/api";
export async function POST(request) {
  return handleLead(request, [
    "nome",
    "telefone",
    "email",
    "assunto",
    "mensagem",
  ]);
}
