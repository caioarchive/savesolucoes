import { handleLead } from "@/lib/api";
export async function POST(request) {
  return handleLead(request, [
    "nome",
    "email",
    "telefone",
    "celular",
    "segmento",
    "estado",
    "cidade",
    "mensagem",
  ]);
}
