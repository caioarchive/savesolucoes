import { services } from "@/data/services";
import { segments } from "@/data/segments";
import { articles } from "@/data/articles";
const base = "https://www.savesolucoes.com.br";
export default function sitemap() {
  const fixed = [
    "",
    "/servicos",
    "/abrir-empresa",
    "/migrar-contabilidade",
    "/sobre",
    "/segmentos",
    "/conteudos",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];
  return [
    ...fixed.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((x) => ({
      url: `${base}/servicos/${x.slug}`,
      lastModified: new Date(),
    })),
    ...segments.map((x) => ({
      url: `${base}/segmentos/${x.slug}`,
      lastModified: new Date(),
    })),
    ...articles.map((x) => ({
      url: `${base}/conteudos/${x.slug}`,
      lastModified: new Date(x.date),
    })),
  ];
}
