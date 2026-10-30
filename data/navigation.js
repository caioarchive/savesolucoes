import { services } from "@/data/services";

export const servicesNavigation = [
  ...services.map(({ slug, title }) => ({
    label: title,
    href: `/servicos/${slug}`,
  })),
  { label: "Segmentos", href: "/segmentos", separated: true },
];

export const navigation = [
  { label: "Serviços", type: "services" },
  { label: "Abrir ou migrar", type: "business" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const businessNavigation = [
  { label: "Abrir empresa", href: "/abrir-empresa" },
  { label: "Migrar contabilidade", href: "/migrar-contabilidade" },
];

export const footerNavigation = [
  { label: "Downloads", href: "/downloads" },
  { label: "Serviços", href: "/servicos" },
  { label: "Segmentos", href: "/segmentos" },
  ...businessNavigation,
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];
