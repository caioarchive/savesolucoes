import { Inter, Manrope } from "next/font/google";

import "./globals.css";

import ContextCursor from "@/components/interactions/ContextCursor";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MotionProvider from "@/components/motion/MotionProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
export const metadata = {
  metadataBase: new URL("https://www.savesolucoes.com.br"),
  title: {
    default: "Save Soluções Contábeis e Empresariais",
    template: "%s | Save Soluções",
  },
  description:
    "Contabilidade completa, organização e tecnologia para apoiar sua empresa.",
  openGraph: { siteName: "Save Soluções", locale: "pt_BR", type: "website" },
  twitter: { card: "summary_large_image" },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Save Soluções Contábeis e Empresariais",
  url: "https://www.savesolucoes.com.br",
  telephone: "+55 82 3435-1890",
  email: "contato@savesolucoes.com.br",
  sameAs: ["https://www.instagram.com/save.solucoes/"],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Av. Menino Marcelo, 9350, Sala 315, Empresarial Humberto Lobo",
    addressLocality: "Maceió",
    addressRegion: "AL",
    postalCode: "57046-000",
    addressCountry: "BR",
  },
  areaServed: "Brasil",
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <ContextCursor />
          <SmoothScroll>
            <Header />
            {children}
            <Footer />
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
