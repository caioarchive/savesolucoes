export const services = [
  {
    slug: "contabilidade",
    title: "Contabilidade completa",
    short:
      "Planejamento, escrituração física e digital, relatórios contábeis, análise de balanços e acompanhamento dos resultados da empresa.",
    items: [
      "Planejamento contábil",
      "Elaboração do plano de contas",
      "Escrituração contábil e SPED",
      "Relatórios conforme as Normas Brasileiras de Contabilidade",
      "Análise de balanços",
      "Perícias contábeis",
      "Assessoria para Lucro Real, Lucro Presumido, Simples Nacional, imunes e isentas",
      "Apuração de resultados",
    ],
  },
  {
    slug: "fiscal-tributario",
    title: "Fiscal e tributário",
    short:
      "Organização das rotinas fiscais, apuração de tributos e acompanhamento das obrigações federais, estaduais e municipais.",
    items: [
      "Escrituração de notas fiscais",
      "Conferência da emissão de documentos fiscais",
      "Emissão de livros fiscais",
      "Escrituração dos estoques",
      "Apuração dos tributos",
      "Emissão de guias",
      "Demonstrativos de débitos",
      "Acompanhamento de fiscalizações",
      "Orientação sobre substituição tributária",
    ],
  },
  {
    slug: "departamento-pessoal",
    title: "Departamento pessoal",
    short: "Execução e acompanhamento das rotinas trabalhistas da empresa.",
    items: [
      "Admissões e desligamentos",
      "Folha de pagamento",
      "Pró-labore",
      "Encargos sobre a folha",
      "Controle de contratos de experiência",
      "Controle de férias",
      "Obrigações trabalhistas",
      "Acompanhamento de convenções e acordos coletivos",
      "Orientação sobre benefícios",
    ],
  },
  {
    slug: "servicos-societarios",
    title: "Serviços societários",
    short: "Apoio para constituir, alterar, regularizar ou encerrar empresas.",
    items: [
      "Constituição e encerramento",
      "Legalização nos órgãos públicos",
      "Elaboração de contratos sociais",
      "Alterações societárias",
      "Análise de enquadramento",
      "Alvarás e licenças",
      "Certidões negativas",
      "Apoio em cisões, fusões, incorporações e aquisições",
    ],
  },
  {
    slug: "auditoria",
    title: "Auditoria",
    short:
      "Análise preventiva para identificar riscos e orientar procedimentos legais.",
    items: [
      "Prevenção de passivos trabalhistas",
      "Prevenção de passivos tributários",
      "Acompanhamento dos procedimentos legais da empresa",
    ],
  },
  {
    slug: "imposto-de-renda",
    title: "Imposto de renda",
    short:
      "Orientação e elaboração de declarações para pessoas físicas e jurídicas.",
    items: [
      "Declaração de pessoa física",
      "Declaração de pessoa jurídica",
      "Análise da legislação aplicável",
      "Cálculos relacionados ao imposto de renda",
      "Obrigações relacionadas",
    ],
  },
  {
    slug: "escritorio-virtual",
    title: "Escritório virtual e serviços online",
    short:
      "Tecnologia para facilitar a comunicação, o envio de documentos e o acesso às informações contábeis.",
    items: [
      "Atendimento online",
      "Histórico de conversas e solicitações",
      "Troca digital de documentos",
      "Conteúdos empresariais",
      "Agenda tributária",
      "Notícias",
      "Indicadores econômicos",
      "Área exclusiva do cliente",
    ],
  },
];
export const getService = (slug) =>
  services.find((service) => service.slug === slug);
