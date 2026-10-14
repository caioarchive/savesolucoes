# Brief de produto — Save Soluções

Este documento registra o resumo de planejamento aprovado. Ele orienta decisões futuras; o estado técnico da implementação está em [HANDOFF.md](HANDOFF.md). Divergências com o código estão identificadas abaixo e **não autorizam mudanças sem nova aprovação**.

## Objetivo

Finalizar o site institucional da Save com linguagem editorial, confiável e contemporânea, clareza comercial, responsividade, acessibilidade e migração segura do site antigo.

## Requisitos de trabalho

- Trabalhar por página e seção, com aprovação antes de avançar. Inspecionar a implementação e o resultado no navegador antes de editar.
- Usar `design-taste-frontend`, `emil-design-eng` e Impeccable nas análises e refinamentos de interface, subordinados à identidade e ao conteúdo aprovados da Save.
- Preservar a identidade monocromática e institucional; evitar aparência de template, cards genéricos, títulos excessivos e animação decorativa.
- Usar movimento apenas para comunicar hierarquia, explicação, feedback ou estado. Respeitar `prefers-reduced-motion`; não travar nem sequestrar a rolagem.
- Não gerar novas imagens sem solicitação explícita. Mídia ainda não aprovada deve ser configurável e sua ausência não pode tornar a seção ilegível nem criar caixas vazias.
- Preservar URLs, formulários e integrações existentes, salvo decisão explícita.
- Validar em 1440×900, 768×1024 e 390×844, incluindo um `h1` por página, sem overflow horizontal, textos cortados ou sobreposição, com foco visível, teclado e console limpo.
- Exigir ESLint, Prettier, `git diff --check` e build aprovados antes do aceite final.

## Decisões aprovadas

### Navegação

Ordem principal: `Logo → Serviços ▾ · Abrir ou migrar ▾ · Sobre · Contato · Área do cliente`.

- O logo leva à home. “Abrir empresa” e “Migrar contabilidade” ficam no mesmo disclosure; “Conteúdos” não ocupa a navegação principal.
- O rodapé mantém navegação complementar, contato, endereço, privacidade e termos.
- Menus funcionam por clique e teclado, com foco e estados ativos claros, sem depender de hover. Links externos devem indicar a saída para outro ambiente.
- No mobile, o backdrop do menu deve cobrir toda a viewport fora do contexto transformado do header. Com o menu aberto, header e painel permanecem brancos, sólidos e nítidos; o painel continua ancorado abaixo do header, com altura baseada em `100dvh`, rolagem interna e contenção de overscroll.

### `/contato`

- No desktop, informações e formulário lado a lado; canais em composição editorial com divisórias, formulário como único card e mapa responsivo.
- No mobile, ordem: título, canais, formulário e mapa. H1 em escala de página interna.
- Preservar campos, consentimento, validação e envio existentes.

### `/segmentos` e páginas individuais

- Listagem com hero editorial e cabeçalho em duas colunas no desktop; oito segmentos em grade 4×2 no desktop, duas colunas no tablet e uma no mobile.
- Cards abertos, sem caixa, sombra ou fundo próprio; foto 16:9, índice, título, descrição e seta. Card inteiro como link, com foco visível. Oito imagens específicas na listagem.
- Páginas individuais centralizadas em três arquétipos, sem oito layouts independentes:

| Arquétipo        | Segmentos                                                  |
| ---------------- | ---------------------------------------------------------- |
| `photo-story`    | Comércio, Restaurantes, Profissionais da saúde             |
| `service-flow`   | Prestadores de serviços, Profissionais liberais, Advogados |
| `operations-map` | Sistemas empresariais, Telecomunicações                    |

- Cada página de segmento deve ter hero contextual, narrativa em três momentos, FAQ com cinco perguntas e CTA final, configurados centralmente. `media: null` não deve produzir placeholder visível ou retângulo vazio; inserir mídia posteriormente não deve exigir reconstrução do layout.

### Conteúdos, notícias e migração

- Manter `/conteudos`, seus três artigos e dados para possível reativação. O hero é editorial; a listagem preferida é compacta, com categorias e três cards alinhados no desktop, sem um artigo desproporcionalmente destacado.
- Os artigos individuais devem oferecer leitura editorial própria, sem inventar publicações, datas ou uma frequência de atualização.
- Não apresentar a área como portal de notícias alimentado automaticamente sem operação editorial real.
- O destino público definitivo de `/conteudos` permanece aberto. Até decisão posterior, o código atual não o promove e aplica `noindex`; isso não é decisão de excluir o acervo.
- Notícias antigas não podem desaparecer silenciosamente nem ser redirecionadas genericamente para a home. Antes de manter, consolidar, excluir ou redirecionar, levantar URLs, tráfego, indexação e backlinks, inclusive as URLs sob `/noticias`. A etapa de migração decidirá o tratamento de cada URL.

### Privacidade e termos

- O novo site mantém links de “Privacidade” e “Termos de uso” no rodapé.
- A referência ao site antigo indica política praticamente vazia. O texto jurídico definitivo do novo site ainda requer fornecimento ou validação pela Save; não apresentar redação provisória como aprovada.

### Home

Sequência aprovada: Hero → escolha do momento da empresa → como apoiamos sua empresa → serviços → presença no dia a dia → Connect Save → segmentos → FAQ → CTA final.

- O hero deve comunicar a atuação da Save de forma concreta, com H1 controlado, e ocupar integralmente a primeira tela. A seção seguinte não deve aparecer na dobra inicial; `min-h-[100dvh]` deve ser preservado. Refinamentos futuros devem atuar apenas na composição interna, como distribuição vertical, escala do título, CTAs e equilíbrio do espaço inferior.
- “Falar com a Save” permanece CTA principal. O papel de “Conhecer os serviços” como secundário deve ser reavaliado.
- Não adicionar imagem ou animação só para produzir impacto.
- Na seção “Qual é o momento da sua empresa?”, abertura e migração devem receber o mesmo peso visual e comercial. Nenhuma opção deve ter destaque permanente sobre a outra.
- O destaque “próximo passo” no hero deve ser preservado com peso semibold, mantendo ênfase sem criar contraste tipográfico excessivo.
- Na seção de escolha do momento da empresa, o cabeçalho aprovado é “Vai abrir uma empresa ou mudar de contador?”, acompanhado por “Escolha o caminho e conheça como a Save pode acompanhar esse processo.” O cabeçalho deve ficar centralizado em tablet e desktop e alinhado à esquerda no mobile. Os conteúdos dos dois caminhos permanecem alinhados à esquerda e com o mesmo peso visual e comercial.
- A seção “Como apoiamos sua empresa” será mantida entre a escolha do momento da empresa e a apresentação dos serviços. Sua função é explicar a forma de atuação da Save, sem repetir o catálogo de serviços. A seção preserva o fundo escuro e utiliza um mosaico assimétrico mais compacto no desktop, com conteúdo centralizado verticalmente e sem linhas decorativas. No mobile, adota um mosaico responsivo que alterna conteúdo e fotografias reais do cotidiano do escritório. Cards e fotografias estáticas não devem apresentar cursor ou feedback que sugira clique.
- Entre “O que fazemos” e “Presença no dia a dia”, não será adicionada uma nova seção. O intervalo deve ser reduzido localmente para criar continuidade visual, preservando uma pausa clara entre os dois blocos e sem alterar o espaçamento global das demais seções.
- A seção Connect Save preserva o mosaico atual no desktop. No mobile, o vídeo utiliza proporção mais compacta e a galeria passa a ser um mosaico estático: equipe em largura total e duas fotografias abaixo. `IMG_0741.JPEG`, mostrando o público, substitui a imagem inferior direita. Fotografias só devem possuir link externo quando a publicação correspondente estiver confirmada.

## Comportamentos esperados

- Mouse, teclado e toque alcançam os destinos. Elementos clicáveis têm feedback discreto, foco visível e estado ativo correto.
- Animações de entrada não bloqueiam interação. Seções sticky voltam ao fluxo normal em tablet, mobile e movimento reduzido.
- FAQs usam botão semântico, ARIA, Enter e Espaço e mantêm no máximo uma resposta aberta.
- Imagens usam proporção e carregamento adequados, texto alternativo e recorte coerente. Se a mídia faltar, o conteúdo permanece legível.

## Critérios de aceite

- Linguagem coerente com a Save, hierarquia tipográfica clara e funções distintas para seções adjacentes, sem repetição visual ou semântica desnecessária.
- Conteúdo factual: sem métricas, depoimentos, serviços, condições ou resultados inventados.
- Desktop, tablet e mobile aprovados; sem textos cortados, sobreposição, overflow horizontal ou mais de um `h1` por página.
- Links, foco, hover, teclado, estados ativos, FAQs e movimento reduzido verificados; console sem erros.
- ESLint, Prettier, `git diff --check` e build aprovados no estado final; rotas e integrações essenciais respondem corretamente.
- Nenhuma URL antiga relevante removida ou redirecionada sem inventário e plano de migração aprovado.

## Dúvidas abertas

- Aprovação da Save para a copy apresentada no hero da home e decisão final sobre o destino ou a permanência do CTA secundário “Conhecer os serviços”.
- Fluxo completo de `/sobre` e diferenciação em relação à home: confirmar se a página deve apresentar história, liderança ou equipe, além do posicionamento já implementado. Validar com a Save as provas atualmente exibidas — fundação em 2021, atendimento nacional, sete frentes de serviço, sede em Maceió e nota 5,0 no Google — e obter o destino correto para “Ler avaliações”.
- Quais provas reais a Save autoriza usar: história, equipe, números, certificações, eventos e método de atendimento.
- Destino público de `/conteudos`, aprovação do template editorial já implementado e tratamento do acervo antigo de `/noticias`.
- Inventário de URLs antigas e respectivos redirects, embasados em Search Console, tráfego e backlinks.
- Texto jurídico definitivo de privacidade e termos; revisão das menções atuais a conteúdos/notícias.
- Fotografias que serão inseridas manualmente nos segmentos com `media: null`.
- Integrações finais de formulários, analytics, Search Console e ambiente de publicação.

## Comparação com o projeto atual

Verificação estática do repositório; não representa aprovação visual de todas as páginas nem uma nova execução do build.

**Estado atual do aceite técnico:** Prettier, ESLint, `git diff --check` e build passam no worktree atual. O uso de altura mínima de viewport no hero está alinhado à decisão aprovada de ocupar integralmente a primeira tela. O template de artigos e o fluxo de `/sobre` já existem, embora ainda precisem de confirmação editorial.

| Tema                 | Estado encontrado                                                                                                                                                                                        | Diferença ou decisão pendente                                                                                                                                     |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navegação            | `data/navigation.js` implementa os dois disclosures, links diretos e rodapé complementar; `/conteudos` não é promovido.                                                                                  | Alinhado ao resumo. A validação final de toque e console continua pendente.                                                                                       |
| Contato              | `app/contato/page.js` inclui canais, `LeadForm` e iframe de mapa em seção própria.                                                                                                                       | Estrutura alinhada; conteúdo jurídico e integrações ainda exigem validação da Save.                                                                               |
| Segmentos            | `SegmentsSection.jsx` tem grade responsiva e oito imagens em `data/segments.js`; `segmentPages.js` configura oito slugs, três variantes, três momentos e cinco perguntas por FAQ.                        | Estrutura alinhada. A mídia da listagem existe, mas várias mídias narrativas permanecem `null` por decisão; sua seleção manual continua aberta.                   |
| Conteúdos            | Listagem compacta e template editorial de artigos já estão implementados; ambas as rotas têm `noindex, nofollow` e saíram do sitemap.                                                                    | O resumo ainda descreve o tratamento editorial dos artigos como necessidade. O código avançou; falta confirmar sua aprovação e o destino público da área.         |
| Home                 | A ordem das seções coincide com o resumo e não renderiza a seção de artigos. `Hero.jsx` usa `min-h-[100dvh]`; a primeira dobra fica integralmente ocupada pelo hero e `HeroIntro.jsx` mantém o CTA “Conhecer os serviços”. | A composição está alinhada à decisão aprovada. A copy apresentada e o destino ou permanência do CTA secundário ainda dependem da aprovação final da Save.          |
| `/sobre`             | Há hero, fotografia, “A Save hoje”, processo, Connect Save e CTA. A página usa as provas “2021”, “Brasil”, “7”, “Maceió” e “5,0 no Google”; o CTA “Ler avaliações” leva a uma busca do endereço no Google Maps. | A composição é visualmente consistente, mas ainda precisa diferenciar melhor o conteúdo da home e ter todas as provas e o link de avaliações validados pela Save. |
| Privacidade e termos | As duas páginas têm texto no código; Termos ainda menciona “Conteúdos e notícias”.                                                                                                                       | O texto jurídico não consta como aprovado. A observação sobre política quase vazia refere-se ao site antigo, não à rota nova. Não reescrever sem revisão da Save. |
| Notícias antigas     | `next.config.mjs` não define redirects e não há rotas `/noticias/...` no novo projeto.                                                                                                                   | Inventário e plano de migração não realizados; não publicar presumindo equivalência ou enviando notícias para a home.                                             |
| Qualidade            | `npm run format:check`, `npm run lint`, `git diff --check` e `npm run build` passam após a revisão interna.                                                                                                  | Critérios automatizados principais cumpridos; concluir os testes de navegador e dispositivo real antes do aceite final.                                         |

O worktree tem numerosas alterações não commitadas de etapas anteriores. Preservá-las ao executar qualquer próximo passo.
