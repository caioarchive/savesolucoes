import assert from "node:assert/strict";
import test from "node:test";
import { unstable_getResponseFromNextConfig as resolve } from "next/experimental/testing/server.js";
import nextConfig from "../next.config.mjs";

test("o acesso antigo à folha chega à página de contato em um salto", async () => {
  for (const host of [
    "savesolucoes.com.br",
    "www.savesolucoes.com.br",
    "savesolucoes.save-solu-es.workers.dev",
  ]) {
    for (const slash of ["", "/"]) {
      const response = await resolve({
        url: `https://${host}/site/pagina-adicional/53/lancamento-de-eventos${slash}`,
        headers: { host },
        nextConfig,
      });
      assert.equal(response.status, 301);
      const destination = new URL(response.headers.get("location"));
      assert.equal(
        destination.hostname,
        host.endsWith(".workers.dev") ? host : "www.savesolucoes.com.br",
      );
      assert.equal(destination.pathname, "/contato");
      assert.equal(destination.hash, "#acessos-do-cliente");
      const target = await resolve({
        url: destination.href,
        headers: { host: destination.host },
        nextConfig,
      });
      assert.equal(target.headers.get("location"), null);
    }
  }
});

test("notícias e serviços em análise não são redirecionados", async () => {
  for (const path of [
    "/noticias",
    "/noticias/detalhes/123/exemplo",
    "/site/pagina-adicional/14/area-trabalhista-e-previdenciaria",
    "/site/pagina-adicional/41/servicos-online",
  ]) {
    const response = await resolve({
      url: `https://www.savesolucoes.com.br${path}`,
      headers: { host: "www.savesolucoes.com.br" },
      nextConfig,
    });
    assert.equal(response.headers.get("location"), null);
  }
});
