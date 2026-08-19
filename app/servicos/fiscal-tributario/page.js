import ServiceDetail from "@/components/pages/ServiceDetail";
import { getService } from "@/data/services";
import { makeMetadata } from "@/lib/metadata";
const service = getService("fiscal-tributario");
export const metadata = makeMetadata(
  service.title,
  service.short,
  "/servicos/fiscal-tributario",
);
export default function Page() {
  return <ServiceDetail service={service} />;
}
