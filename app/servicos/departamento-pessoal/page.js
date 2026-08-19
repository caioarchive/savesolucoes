import ServiceDetail from "@/components/pages/ServiceDetail";
import { getService } from "@/data/services";
import { makeMetadata } from "@/lib/metadata";
const service = getService("departamento-pessoal");
export const metadata = makeMetadata(
  service.title,
  service.short,
  "/servicos/departamento-pessoal",
);
export default function Page() {
  return <ServiceDetail service={service} />;
}
