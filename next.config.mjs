const nextConfig = {
  devIndicators: false,
  // Resolve a URL antiga antes da normalização de barra, evitando dois saltos.
  skipTrailingSlashRedirect: true,
  async redirects() {
    const clientLinks = [
      [
        "/web-files/uploads/arquivo/site/33781c2e38e4da1c74ea2701e2c9e661.doc",
        "/downloads/aviso-previo-empregador.doc",
      ],
      [
        "/web-files/uploads/arquivo/site/b06059268ba30dd6cb1d439abdbf91f0.doc",
        "/downloads/aviso-admissao-empregado.doc",
      ],
      [
        "/web-files/uploads/arquivo/site/94ef712d364ceed05e4a21b4799c6eab.doc",
        "/downloads/aviso-demissao-empregado.doc",
      ],
      [
        "/web-files/uploads/arquivo/site/3de8cebf4cda15a7e9efdb926ad858ca.doc",
        "/downloads/encaminhamento-ctps.doc",
      ],
      [
        "/web-files/uploads/arquivo/site/d563f9f209179a31ab16210944828238.doc",
        "/downloads/carta-advertencia-disciplinar.doc",
      ],
      ["/site/ferramentascontabeis", "/ferramentas"],
      ["/site/downloads", "/downloads"],
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
