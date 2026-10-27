# Save Soluções

Site institucional em Next.js App Router, JavaScript, Tailwind CSS e Framer Motion.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Produção

```bash
npm run build
npm start
```

## Envio dos formulários com Resend

Os formulários de contato, abertura de empresa e migração enviam e-mail pela API
HTTP do Resend. A chave e os endereços ficam somente no servidor.

1. Copie `.env.example` para `.env.local`.
2. No painel do Resend, crie uma API key e preencha `RESEND_API_KEY`.
3. Defina `RESEND_FROM_EMAIL` com um remetente autorizado. Para o primeiro teste,
   o Resend permite usar o remetente de teste da conta; para produção, use um
   domínio verificado.
4. Defina `RESEND_TO_EMAIL` com seu e-mail de teste e reinicie `npm run dev`.
5. Envie cada formulário e confirme o recebimento e o `reply-to`. Para trocar o
   destinatário pelo e-mail da Save, altere apenas `RESEND_TO_EMAIL`.

No Cloudflare Workers, cadastre as três variáveis em **Settings → Variables and
Secrets** como secrets de runtime. Não adicione a chave ao `wrangler.jsonc` e não
commite `.env.local`. O projeto acessa esses valores por `process.env`, suportado
pelo `nodejs_compat` já configurado.

## Verificação

```bash
npm test
npm run lint
npm run build
```

Os testes simulam o Resend: nenhuma mensagem real é enviada durante a suíte.
