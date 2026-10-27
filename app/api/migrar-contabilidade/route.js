import { handleLead } from "@/lib/api";
export async function POST(request) {
  return handleLead(request, [
    "razaoSocial",
    "cnpj",
    "tipoEmpresa",
    "telefone",
    "email",
    "mensagem",
  ]);
}
