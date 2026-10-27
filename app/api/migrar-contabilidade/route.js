import { handleLead } from "@/lib/api";
export async function POST(request) {
  return handleLead(request, "migrar-contabilidade");
}
