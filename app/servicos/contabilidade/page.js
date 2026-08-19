import ServiceDetail from "@/components/pages/ServiceDetail";
import { getService } from "@/data/services";
import { makeMetadata } from "@/lib/metadata";
const service = getService("contabilidade");
export const metadata = makeMetadata(
  service.title,
  service.short,
  "/servicos/contabilidade",
);
export default function Page() {
  return <ServiceDetail service={service} />;
}
