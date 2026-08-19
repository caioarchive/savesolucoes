import ServiceDetail from "@/components/pages/ServiceDetail";
import { getService } from "@/data/services";
import { makeMetadata } from "@/lib/metadata";
const service = getService("imposto-de-renda");
export const metadata = makeMetadata(
  service.title,
  service.short,
  "/servicos/imposto-de-renda",
);
export default function Page() {
  return <ServiceDetail service={service} />;
}
