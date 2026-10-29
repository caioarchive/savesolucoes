const nextConfig = {
  devIndicators: false,
  // Resolve a URL antiga antes da normalização de barra, evitando dois saltos.
  skipTrailingSlashRedirect: true,
  async redirects() {
    const clientLinks = [
      [
        "/site/pagina-adicional/53/lancamento-de-eventos",
        "/contato#acessos-do-cliente",
      ],
    ];
    return [
      ...clientLinks.map(([source, destination]) => ({
        source,
        has: [{ type: "host", value: "(?:www\\.)?savesolucoes\\.com\\.br" }],
        destination: `https://www.savesolucoes.com.br${destination}`,
        statusCode: 301,
      })),
      ...clientLinks.map(([source, destination]) => ({
        source,
        destination,
        statusCode: 301,
      })),
      { source: "/:path+/", destination: "/:path+", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".+\\.workers\\.dev" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
