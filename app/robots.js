export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://www.savesolucoes.com.br/sitemap.xml",
  };
}
