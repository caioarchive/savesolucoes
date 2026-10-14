# Handoff

## Objetivo atual

Concluir a revisão interna página por página antes de publicar a versão de homologação para a Save. A home foi revisada em desktop e mobile; a página `/sobre` foi revisada e aguarda decisões editoriais sobre provas comerciais e diferenciação em relação à home.

As decisões de produto, requisitos e critérios de aceite aprovados estão em [PROJECT_BRIEF.md](PROJECT_BRIEF.md); este arquivo permanece o handoff técnico da implementação.

## Decisões já tomadas e motivos

- O logo é o acesso à home; “Início” saiu da navbar para evitar redundância.
- “Serviços” reúne os sete serviços existentes e “Segmentos” ao final, separado por uma divisória. “Abrir ou migrar” reúne somente abertura e migração. Os grupos usam disclosure por clique e teclado, sem depender de hover.
- A navegação desktop permanece no breakpoint `xl` (1280px); abaixo dele, o menu compacto evita comprimir logo e “Área do cliente”.
- `/conteudos` e os três artigos permanecem no projeto, com `noindex, nofollow`, para possível reativação. Saíram do sitemap e das chamadas públicas, sem redirects para notícias antigas.
- Textos legais não foram reescritos sem aprovação. As URLs antigas `/noticias/...` dependem de inventário do Search Console antes da publicação.

## O que foi implementado

- Navbar desktop: `Serviços`, `Abrir ou migrar`, `Sobre`, `Contato` e “Área do cliente”; menus com `aria-expanded`, `aria-controls`, foco visível, Escape e fechamento por seleção ou clique fora. Estados ativos cobrem serviços, segmentos, abertura e migração.
- Menu compacto: os mesmos grupos e destinos, com controles por clique/teclado e links ocultos fora da ordem de Tab quando fechados.
- Home sem renderizar `LatestArticles`; `/sobre` sem o CTA do Connect Save para `/conteudos`; rodapé sem link para `/conteudos`.
- Sitemap sem `/conteudos` e artigos; metadados dessas rotas com `noindex, nofollow`. Páginas, artigos, dados, templates e formulários foram preservados.
- Menu mobile com backdrop portado para fora do header, painel sólido, altura em `100dvh`, contenção de overscroll e header nítido.
- Home revisada em desktop e mobile, com primeira dobra integralmente ocupada pelo hero e sem overflow horizontal ou erros de console.
- `/sobre` agora possui o landmark semântico `<main>`; a alteração não modifica o layout.
- `/servicos` agora envolve `PageHero`, `ServicesSection` e `FinalCTA` em um único landmark semântico `<main>`, sem alteração visual ou de comportamento.

## Arquivos principais envolvidos

- Navegação: `data/navigation.js`, `components/layout/DesktopNavigation.jsx`, `components/layout/ServicesDropdown.jsx`, `components/layout/MobileNavigation.jsx`, `components/layout/Footer.jsx`.
- Chamadas públicas: `app/page.js`, `components/about/ConnectShowcase.jsx`.
- Indexação: `app/sitemap.js`, `app/conteudos/page.js`, `app/conteudos/[slug]/page.js`.
- Preservado sem renderização na home: `components/sections/LatestArticles.jsx`.

## Testes executados e resultados

- `npm run format:check`: aprovado após a normalização mecânica dos arquivos pendentes.
- `npm run lint`: aprovado na verificação atual.
- `git diff --check`: aprovado na verificação atual.
- `npm run build`: aprovado, com 38 páginas geradas e as rotas de conteúdos e seus três artigos preservados.
- Navegador em 1440, 1024, 768 e 390px: navbar em uma linha no desktop amplo, menu compacto nas larguras menores e sem overflow horizontal observado.
- Interação: clique, Enter, Espaço, Tab, Shift+Tab, Escape, clique fora, seleção de link e estados ativos verificados nas rotas testadas. ArrowDown não foi interceptado. Teste físico de toque ainda não foi feito.
- Home e `/sobre` sem links públicos para `/conteudos`; sitemap respondeu 200 sem essas URLs; listagem e um artigo exibiram `noindex, nofollow`.
- `git diff --check` apontou espaço em branco final preexistente em `components/sections/BusinessPaths.jsx:55`, fora deste escopo.

## Problemas ou riscos conhecidos

- O worktree contém numerosas alterações e arquivos não rastreados de outras etapas; não descartá-los nem fazer reset global.
- `app/termos-de-uso/page.js:23` menciona “Conteúdos e notícias”. `data/services.js` também descreve conteúdos/notícias do escritório virtual. A equipe deve confirmar se essas afirmações continuam corretas antes de editar os textos.
- As rotas de conteúdos continuam acessíveis por URL direta, embora não sejam promovidas nem indexáveis; isso é intencional e não equivale a bloqueio de acesso.
- Falta a checagem final de console em produção e em dispositivo touch real. As antigas `/noticias/...` ainda não foram inventariadas com dados do Search Console; nenhum redirect foi criado.
- `/sobre` exibe as provas “2021”, “Brasil”, “7”, “Maceió” e “5,0 no Google”, que ainda precisam de validação da Save. “Ler avaliações” aponta para uma busca do endereço no Google Maps, não para um destino de avaliações confirmado.
- Em `/sobre`, dois CTAs com o mesmo rótulo “Falar com a Save” têm destinos diferentes: `/contato` no hero e WhatsApp no CTA final. A padronização depende de decisão de produto.

## Próximo passo exato

Apresentar os achados de `/sobre` para decisão: validar as provas comerciais, confirmar o link de avaliações, decidir se a página precisa de história, liderança ou equipe e padronizar o destino de “Falar com a Save”. Depois, continuar a revisão interna pela listagem `/servicos`.

## Critérios para considerar a tarefa concluída

- Navbar e menu compacto exibem somente os destinos aprovados, com links, foco, fechamento e estados ativos corretos em 1440, 1024, 768 e 390px, sem overflow ou erros de console.
- “Área do cliente”, páginas, formulários e slugs existentes continuam intactos; nenhuma chamada pública leva a `/conteudos`.
- `/conteudos` e artigos permanecem acessíveis por URL direta com `noindex`, ausentes do sitemap; lint e build passam no estado final.
- Equipe aprova ou corrige as menções a conteúdos/notícias e conclui o inventário das URLs antigas com Search Console antes de qualquer decisão de migração ou redirect.
