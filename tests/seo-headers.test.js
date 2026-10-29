import assert from "node:assert/strict";
import test from "node:test";
import { unstable_getResponseFromNextConfig } from "next/experimental/testing/server.js";
import nextConfig from "../next.config.mjs";

const paths = [
  "/",
  "/sobre",
  "/servicos/contabilidade",
  "/conteudos",
  "/robots.txt",
  "/sitemap.xml",
];

test("a prévia do Worker recebe noindex em páginas e arquivos de SEO", async () => {
  for (const host of [
    "savesolucoes.save-solu-es.workers.dev",
    "versao-savesolucoes.save-solu-es.workers.dev",
  ]) {
    for (const path of paths) {
      const response = await unstable_getResponseFromNextConfig({
        url: `https://${host}${path}`,
        headers: { host },
        nextConfig,
      });
      assert.equal(
        response.headers.get("x-robots-tag"),
        "noindex",
        `${host}${path}`,
      );
    }
  }
});

test("o domínio final não recebe o noindex exclusivo da prévia", async () => {
  for (const host of [
    "www.savesolucoes.com.br",
    "savesolucoes.com.br",
    "workers.dev.example.com",
  ]) {
    for (const path of paths) {
      const response = await unstable_getResponseFromNextConfig({
        url: `https://${host}${path}`,
        headers: {
          host,
          "x-forwarded-host": "savesolucoes.save-solu-es.workers.dev",
        },
        nextConfig,
      });
      assert.equal(
        response.headers.get("x-robots-tag"),
        null,
        `${host}${path}`,
      );
    }
  }
});
