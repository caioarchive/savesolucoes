import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";
import { unstable_getResponseFromNextConfig as resolve } from "next/experimental/testing/server.js";
import nextConfig from "../next.config.mjs";
import { downloads } from "../data/downloads.js";

test("modelos ativados apontam para arquivos locais existentes", async () => {
  assert.equal(downloads.length, 5);
  assert.equal(new Set(downloads.map((item) => item.id)).size, 5);
  for (const item of downloads) {
    if (item.file === null) continue;
    assert.match(item.file, /^\/downloads\/[a-z0-9-]+\.(docx?|pdf|odt)$/);
    await access(new URL(`../public${item.file}`, import.meta.url));
  }
});

test("downloads antigos chegam ao catálogo em um salto com parâmetros", async () => {
  for (const host of [
    "savesolucoes.com.br",
    "www.savesolucoes.com.br",
    "savesolucoes.save-solu-es.workers.dev",
  ]) {
    for (const slash of ["", "/"]) {
      const response = await resolve({
        url: `https://${host}/site/downloads${slash}?origem=cliente`,
        headers: { host },
        nextConfig,
      });
      assert.equal(response.status, 301);
      const destination = new URL(response.headers.get("location"));
      assert.equal(destination.pathname, "/downloads");
      assert.equal(
        destination.hostname,
        host.endsWith(".workers.dev") ? host : "www.savesolucoes.com.br",
      );
      assert.equal(destination.searchParams.get("origem"), "cliente");
    }
  }
});
