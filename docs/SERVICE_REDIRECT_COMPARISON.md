# Comparação dos dois serviços antigos — 29/10/2026

Análise de conteúdo, sem implementar redirects. A confirmação de Caio continua necessária para cada grupo. Não altera notícias, DNS, e-mail ou publicação.

## Departamento pessoal: equivalente para a página informativa

Origens:

- `/site/pagina-adicional/14/area-trabalhista-e-previdenciaria`
- `/site/pagina-adicional/14/departamento-pessoal`

Destino candidato: `/servicos/departamento-pessoal`.

As duas URLs antigas apresentam o mesmo título (“Departamento Pessoal”) e o mesmo conteúdo. Embora uma URL contenha “previdenciária”, o corpo recuperado trata de rotinas de pessoal e encargos da folha. Não foi encontrado um serviço separado de aposentadoria ou planejamento previdenciário nessa captura.

| Conteúdo antigo observado | Conteúdo novo em `data/services.js` | Avaliação |
| --- | --- | --- |
| Admissão e demissão | Admissões e desligamentos | Equivalente |
| Salários, recibos, pró-labore e folha | Folha de pagamento e pró-labore | Equivalente em escopo; descrição mais resumida |
| Guias de contribuições sobre folha; INSS, FGTS/SEFIP e IRRF explicitados | Encargos sobre a folha e obrigações trabalhistas | Equivalente em escopo; siglas não enumeradas |
| Contrato de experiência e férias | Controle de contratos de experiência e de férias | Equivalente |
| Convenções, acordos e dissídios | Acompanhamento de convenções e acordos coletivos | Equivalente em finalidade |
| Orientação sobre benefícios | Orientação sobre benefícios | Equivalente |
| Relatórios RAIS/GFIP/CAGED e acompanhamento de alterações legais | Obrigações trabalhistas | Síntese do tema; não foi feita auditoria da atualização normativa |

**Recomendação:** o redirect é equivalente para uma página descritiva do serviço. A ressalva inicial sobre um possível conteúdo previdenciário separado não se confirmou no HTML capturado. Esta conclusão não atesta o escopo contratual efetivamente prestado pela Save, a atualidade legal das listas ou conteúdo adicional que possa aparecer no backup. Se aprovado por Caio, cada origem deve receber sua própria regra; nenhuma foi adicionada neste PR.

## Serviços online: parcial

Origem: `/site/pagina-adicional/41/servicos-online`.

Destino candidato: `/servicos/escritorio-virtual`.

| Conteúdo antigo observado | Situação no novo projeto | Avaliação |
| --- | --- | --- |
| Atendimento por chat com histórico da conversa | Descrição de atendimento online e histórico; canais públicos levam principalmente a WhatsApp e Nibo | Tema correspondente, mecanismo não comprovado |
| Artigos empresariais publicados no próprio site | `/conteudos` e artigos existem, mas estão `noindex` e não são promovidos | Preservação parcial |
| Agenda tributária, notícias e indicadores econômicos no website | Itens citados em `data/services.js`; não foram encontradas rotas/componentes que entreguem essas ferramentas | Funções não comprovadas |
| Página apresenta o escritório virtual | Nova página também descreve escritório virtual e inclui acesso à área do cliente | Equivalente na apresentação comercial |

**Recomendação:** classificar como **parcial**. O destino é coerente com o assunto, mas não é uma substituição funcional comprovada do conjunto de serviços anunciado no site antigo. Caio deve confirmar se aceita o destino como apresentação do serviço ou se primeiro serão preservados os acessos às ferramentas. Não implementar automaticamente nem concluir que recursos privados do Nibo/Prosol estão disponíveis sem teste autorizado.

## Fontes e limites

- Capturas públicas da auditoria de 29/10: `output/seo/legacy-public-2026-10-29/pages/ade114d6939c76a3.html` (URL 14 antiga), `d2946e09c93734cb.html` (alias departamento pessoal) e `2920aaef233f511c.html` (serviços online), preservadas no workspace original. Esses arquivos não fazem parte deste PR de documentação.
- Código novo: `data/services.js`, `app/servicos/departamento-pessoal/page.js`, `app/servicos/escritorio-virtual/page.js`, `app/conteudos/page.js`, `components/layout/Header.jsx`, `Footer.jsx` e `MobileNavigation.jsx`.
- Conferido: conteúdo das capturas, correspondência de tópicos, rotas e links no código. Não comprovado: tráfego/indexação, escopo contratual, validade jurídica dos textos, conteúdo do backup, funcionamento de ferramentas externas, funcionalidades após login ou resultado de redirects em produção.
- A comparação tem duas decisões separadas: departamento pessoal equivalente como conteúdo informativo; serviços online parcial. Ambas aguardam confirmação antes de implementação.
