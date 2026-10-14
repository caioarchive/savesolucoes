// Conteúdo das páginas individuais. `media: null` mantém o layout completo sem
// reservar uma caixa vazia; uma mídia futura pode ser adicionada aqui.
export const segmentPages = {
  comercio: {
    pageVariant: "photo-story",
    tone: "dark",
    sectionIds: {
      narrative: "commerce-routine-title",
      faq: "commerce-faq-title",
    },
    hero: {
      eyebrow: "Segmentos atendidos",
      title: "Contabilidade para a rotina do comércio.",
      description:
        "A Save ajuda a organizar informações de vendas, estoque e obrigações fiscais, considerando a realidade de cada operação.",
      media: {
        src: "/images/comercio.jpg",
        alt: "Carrinho de compras ao lado de tomates em um mercado",
        objectPosition: "62% center",
      },
    },
    narrative: {
      title: "O dia a dia do comércio não acontece em uma frente só.",
      moments: [
        {
          index: "01",
          title: "Vendas e documentos",
          description:
            "Registros de vendas e documentos da operação precisam permanecer organizados para tornar a rotina contábil mais clara.",
          media: {
            src: "/images/commerce-routine/vendas-documentos.png",
            alt: "Profissional organiza um comprovante no balcão de uma pequena loja",
            objectPosition: "center center",
          },
        },
        {
          index: "02",
          title: "Estoque e movimentações",
          description:
            "Entradas e saídas fazem parte do contexto do negócio e ajudam a compreender sua operação.",
          media: {
            src: "/images/commerce-routine/estoque-movimentacoes.png",
            alt: "Profissional confere produtos organizados no estoque de uma loja",
            objectPosition: "52% center",
          },
        },
        {
          index: "03",
          title: "Prazos e obrigações",
          description:
            "A atividade reúne responsabilidades fiscais que exigem atenção aos registros e aos períodos próprios de cada empresa.",
          media: {
            src: "/images/commerce-routine/prazos-obrigacoes.png",
            alt: "Responsável por uma loja revisa documentos ao lado de um calendário",
            objectPosition: "center center",
          },
        },
      ],
    },
    faq: {
      eyebrow: "DÚVIDAS FREQUENTES",
      title: "Dúvidas comuns de quem atua no comércio.",
      description:
        "Respostas objetivas sobre a organização da rotina contábil, fiscal e trabalhista do seu negócio.",
      questions: [
        {
          question: "Quais informações do comércio precisam de mais atenção?",
          answer:
            "Registros de vendas, documentos emitidos e recebidos, movimentações de estoque, informações trabalhistas e prazos fiscais ajudam a compor uma rotina contábil mais organizada.",
        },
        {
          question: "Como vendas e estoque impactam a rotina contábil?",
          answer:
            "As vendas e as movimentações de estoque ajudam a contextualizar a operação e precisam estar refletidas nos registros e documentos compartilhados com a contabilidade.",
        },
        {
          question: "A Save atende comércios de diferentes portes?",
          answer:
            "Sim. No primeiro contato, a equipe conhece o porte, a operação e as necessidades do comércio para entender qual acompanhamento faz sentido para aquela realidade.",
        },
        {
          question: "Como funciona o envio de documentos e informações?",
          answer:
            "A forma de envio é alinhada com a equipe da Save e pode acontecer por canais digitais, facilitando a organização e a troca das informações necessárias à rotina.",
        },
        {
          question: "Já tenho contador. Posso migrar para a Save?",
          answer:
            "Sim. A Save começa entendendo o cenário atual da empresa e orienta as informações iniciais e os próximos passos da mudança de contabilidade.",
        },
      ],
    },
  },
  "prestadores-de-servicos": {
    pageVariant: "service-flow",
    tone: "light",
    sectionIds: {
      narrative: "service-providers-routine-title",
      faq: "service-providers-faq-title",
    },
    hero: {
      eyebrow: "Segmentos atendidos",
      title: "Contabilidade para quem transforma conhecimento em serviço.",
      description:
        "A Save acompanha a organização do faturamento, dos documentos e das obrigações da empresa, considerando a dinâmica de cada prestação de serviço.",
      media: null,
    },
    narrative: {
      eyebrow: "Da proposta à entrega",
      title: "Cada etapa deixa informações importantes para a operação.",
      moments: [
        {
          index: "01",
          title: "Propostas, contratos e faturamento",
          description:
            "O que foi combinado, executado e faturado precisa permanecer coerente nos documentos da operação.",
          media: null,
        },
        {
          index: "02",
          title: "Organização de documentos e despesas",
          description:
            "Comprovantes, notas e despesas ajudam a registrar com clareza o contexto de cada período.",
          media: null,
        },
        {
          index: "03",
          title: "Prazos e obrigações da operação",
          description:
            "As responsabilidades fiscais e trabalhistas variam conforme a estrutura e pedem acompanhamento contínuo.",
          media: null,
        },
      ],
    },
    faq: {
      eyebrow: "DÚVIDAS FREQUENTES",
      title: "Dúvidas de quem presta serviços.",
      description:
        "Respostas objetivas para organizar propostas, documentos, faturamento e obrigações da sua operação.",
      questions: [
        {
          question:
            "Quais informações da prestação de serviços precisam ser organizadas?",
          answer:
            "Propostas, contratos, documentos de faturamento, comprovantes de despesas e demais registros da operação ajudam a contextualizar a rotina da empresa para o acompanhamento contábil.",
        },
        {
          question: "Como propostas, contratos e faturamento se relacionam?",
          answer:
            "As propostas e os contratos registram o que foi combinado, enquanto os documentos de faturamento ajudam a identificar os serviços realizados em cada período.",
        },
        {
          question: "Como enviar documentos e informações para a Save?",
          answer:
            "A forma de envio é alinhada com a equipe da Save e pode acontecer pelos canais digitais usados no atendimento. A orientação inicial indica quais informações são necessárias para a rotina da empresa.",
        },
        {
          question:
            "A Save atende empresas prestadoras de serviços de diferentes portes?",
          answer:
            "Sim. No primeiro contato, a equipe conhece a atividade, a estrutura e a rotina da empresa para entender o acompanhamento adequado à realidade da operação.",
        },
        {
          question: "Já tenho contador. Posso migrar para a Save?",
          answer:
            "Sim. A Save começa entendendo o cenário atual da empresa e orienta as informações iniciais e os próximos passos da mudança de contabilidade.",
        },
      ],
    },
  },
  "sistemas-empresariais": {
    pageVariant: "operations-map",
    tone: "charcoal",
    sectionIds: {
      narrative: "business-systems-operations-title",
      faq: "business-systems-faq-title",
    },
    hero: {
      title: "Contabilidade para sistemas empresariais.",
      description:
        "Suporte contábil para empresas de tecnologia que precisam crescer com organização.",
      media: null,
    },
    narrative: {
      title: "Informações conectadas em toda a operação.",
      origin: { kicker: "Operação", label: "Sistemas empresariais" },
      moments: [
        {
          index: "01",
          title: "Receita recorrente e faturamento",
          description:
            "Contratos, cobranças e documentos de faturamento precisam conversar para registrar com clareza a receita de cada período.",
          mapKicker: "Receita",
          mapLabel: "Recorrência e faturamento",
        },
        {
          index: "02",
          title: "Estrutura de custos e operação",
          description:
            "Despesas, equipe e recursos da operação formam o contexto necessário para compreender a estrutura da empresa.",
          mapKicker: "Estrutura",
          mapLabel: "Custos e operação",
        },
        {
          index: "03",
          title: "Indicadores, obrigações e decisões",
          description:
            "Informações organizadas apoiam o acompanhamento das obrigações e tornam os indicadores mais úteis para os próximos passos.",
          mapKicker: "Acompanhamento",
          mapLabel: "Indicadores e obrigações",
        },
      ],
    },
    faq: {
      eyebrow: "DÚVIDAS FREQUENTES",
      title: "Dúvidas de empresas que desenvolvem sistemas.",
      description:
        "Respostas diretas sobre organização de informações, receitas, custos e obrigações da operação.",
      questions: [
        {
          question: "Como a contabilidade acompanha receitas recorrentes?",
          answer:
            "Contratos, valores faturados, recebimentos e documentos emitidos ajudam a contabilidade a registrar e acompanhar as receitas de cada período. A forma de tratamento depende da operação e do enquadramento da empresa.",
        },
        {
          question: "Quais informações da operação precisam ser organizadas?",
          answer:
            "Contratos, notas fiscais, movimentações financeiras, despesas, informações trabalhistas e outros documentos da rotina ajudam a compor uma visão organizada da operação.",
        },
        {
          question: "Como custos e despesas entram na rotina contábil?",
          answer:
            "Custos e despesas precisam estar documentados e classificados de acordo com sua natureza. Esse registro contribui para compreender a estrutura da operação e manter as informações contábeis consistentes.",
        },
        {
          question:
            "A Save atende empresas de tecnologia em diferentes estágios?",
          answer:
            "No primeiro contato, a equipe procura compreender o modelo de negócio, a estrutura e o momento da empresa para avaliar suas necessidades e orientar o acompanhamento mais adequado.",
        },
        {
          question: "Já tenho contador. Posso migrar para a Save?",
          answer:
            "Sim. A Save começa entendendo o cenário atual da empresa e orienta as informações iniciais e os próximos passos da mudança de contabilidade.",
        },
      ],
    },
  },
  restaurantes: {
    pageVariant: "photo-story",
    tone: "dark",
    hero: {
      eyebrow: "Segmentos atendidos",
      title: "Contabilidade para a rotina de restaurantes.",
      description:
        "A Save acompanha a organização dos registros, documentos e obrigações contábeis e fiscais ligados à operação do restaurante.",
      media: null,
    },
    narrative: {
      title: "Uma operação que reúne movimento, equipe e prazos.",
      moments: [
        {
          index: "01",
          title: "Vendas e documentos",
          description:
            "Os registros de vendas e os documentos emitidos ajudam a situar o movimento de cada período.",
          media: null,
        },
        {
          index: "02",
          title: "Compras e despesas",
          description:
            "Notas, comprovantes e movimentações da operação precisam estar organizados para compor a rotina contábil.",
          media: null,
        },
        {
          index: "03",
          title: "Equipe e obrigações",
          description:
            "Informações trabalhistas e responsabilidades fiscais pedem atenção aos registros e prazos do estabelecimento.",
          media: null,
        },
      ],
    },
    faq: {
      eyebrow: "DÚVIDAS FREQUENTES",
      title: "Dúvidas de quem administra um restaurante.",
      description:
        "Informações sobre registros, documentos e obrigações da operação.",
      questions: [
        {
          question:
            "Quais informações do restaurante precisam ser organizadas?",
          answer:
            "Registros de vendas, notas de compras, comprovantes de despesas e informações da equipe ajudam a contextualizar a rotina contábil do estabelecimento.",
        },
        {
          question: "Como as compras entram na rotina contábil?",
          answer:
            "As notas e os comprovantes das compras registram parte das movimentações do restaurante e devem ser compartilhados com a contabilidade conforme a orientação da equipe.",
        },
        {
          question: "As informações da equipe também são relevantes?",
          answer:
            "Sim. Dados de admissões, folha, férias e outras movimentações trabalhistas fazem parte do contexto da operação.",
        },
        {
          question: "Como envio os documentos para a Save?",
          answer:
            "A equipe alinha os canais digitais e as informações necessárias de acordo com a rotina do restaurante.",
        },
        {
          question: "Já tenho contador. Posso conversar sobre a migração?",
          answer:
            "Sim. A Save começa entendendo a situação atual e orienta as informações iniciais e os próximos passos da mudança.",
        },
      ],
    },
  },
  "profissionais-da-saude": {
    pageVariant: "photo-story",
    tone: "dark",
    hero: {
      eyebrow: "Segmentos atendidos",
      title: "Contabilidade para profissionais da saúde.",
      description:
        "A Save ajuda a organizar os documentos, os tributos e as informações da atividade profissional para uma rotina contábil mais clara.",
      media: null,
    },
    narrative: {
      title: "A atividade profissional também tem uma rotina de gestão.",
      moments: [
        {
          index: "01",
          title: "Atendimentos e faturamento",
          description:
            "Os documentos de faturamento ajudam a registrar as receitas da atividade em cada período.",
          media: null,
        },
        {
          index: "02",
          title: "Despesas e estrutura",
          description:
            "Comprovantes e despesas da operação contribuem para compreender o contexto da atividade profissional.",
          media: null,
        },
        {
          index: "03",
          title: "Tributos e obrigações",
          description:
            "Os registros organizados apoiam o acompanhamento das responsabilidades aplicáveis à atividade.",
          media: null,
        },
      ],
    },
    faq: {
      eyebrow: "DÚVIDAS FREQUENTES",
      title: "Dúvidas de profissionais da saúde.",
      description:
        "Respostas sobre documentos, faturamento e obrigações da atividade.",
      questions: [
        {
          question: "Quais documentos ajudam a organizar a atividade?",
          answer:
            "Documentos de faturamento, comprovantes de despesas e registros da estrutura profissional ajudam a compor a rotina contábil.",
        },
        {
          question: "Como as receitas são acompanhadas?",
          answer:
            "Os documentos emitidos e as informações de recebimento permitem registrar as receitas de cada período, conforme a forma de atuação.",
        },
        {
          question: "A estrutura de trabalho influencia as obrigações?",
          answer:
            "Sim. A forma de atuação e a estrutura da atividade são consideradas ao identificar as informações e obrigações pertinentes.",
        },
        {
          question: "Posso ser atendido em outra cidade?",
          answer:
            "A Save atende empresas em todo o país. O primeiro contato ajuda a entender a atividade e a forma de troca das informações.",
        },
        {
          question: "Já tenho contador. Posso migrar para a Save?",
          answer:
            "Sim. A equipe conhece o cenário atual e orienta as informações iniciais e os próximos passos da mudança.",
        },
      ],
    },
  },
  "profissionais-liberais": {
    pageVariant: "service-flow",
    tone: "light",
    hero: {
      eyebrow: "Segmentos atendidos",
      title: "Contabilidade alinhada à sua atividade profissional.",
      description:
        "A Save considera a forma de atuação, os documentos e as obrigações de cada profissional para organizar o acompanhamento contábil.",
      media: null,
    },
    narrative: {
      eyebrow: "DA ATIVIDADE AOS REGISTROS",
      title: "Informações claras em cada parte da rotina.",
      moments: [
        {
          index: "01",
          title: "Atividade e faturamento",
          description:
            "Os serviços realizados e os documentos emitidos ajudam a registrar as receitas da atividade.",
          media: null,
        },
        {
          index: "02",
          title: "Documentos e despesas",
          description:
            "Comprovantes e informações da operação formam o contexto necessário para a rotina contábil.",
          media: null,
        },
        {
          index: "03",
          title: "Obrigações e acompanhamento",
          description:
            "A organização dos registros apoia o acompanhamento das responsabilidades próprias da atividade.",
          media: null,
        },
      ],
    },
    faq: {
      eyebrow: "DÚVIDAS FREQUENTES",
      title: "Dúvidas de profissionais liberais.",
      description:
        "Informações práticas para organizar documentos e obrigações profissionais.",
      questions: [
        {
          question: "Quais informações devo compartilhar com a contabilidade?",
          answer:
            "Documentos de faturamento, comprovantes de despesas e informações sobre a forma de atuação ajudam a contextualizar a atividade.",
        },
        {
          question: "A forma de atuação muda a rotina contábil?",
          answer:
            "Ela pode influenciar quais registros e obrigações são pertinentes. A equipe conhece o contexto no primeiro contato antes de orientar os próximos passos.",
        },
        {
          question: "Como organizar despesas da atividade?",
          answer:
            "Guardar os comprovantes e identificar a natureza de cada despesa facilita o registro das informações compartilhadas com a contabilidade.",
        },
        {
          question: "Posso enviar documentos digitalmente?",
          answer:
            "A forma de envio é alinhada com a Save e pode acontecer por canais digitais usados no atendimento.",
        },
        {
          question: "Já tenho contador. Posso migrar para a Save?",
          answer:
            "Sim. A equipe entende a situação atual e orienta as informações iniciais para a mudança de contabilidade.",
        },
      ],
    },
  },
  advogados: {
    pageVariant: "service-flow",
    tone: "light",
    hero: {
      eyebrow: "Segmentos atendidos",
      title: "Contabilidade para a rotina da advocacia.",
      description:
        "A Save considera o faturamento, os documentos e as obrigações da atividade jurídica para organizar o acompanhamento contábil.",
      media: null,
    },
    narrative: {
      eyebrow: "DA ATIVIDADE À ROTINA",
      title: "Registros organizados para acompanhar a operação.",
      moments: [
        {
          index: "01",
          title: "Contratos e faturamento",
          description:
            "Os documentos da prestação de serviços e do faturamento ajudam a registrar as receitas do período.",
          media: null,
        },
        {
          index: "02",
          title: "Estrutura e despesas",
          description:
            "Comprovantes e informações da estrutura de trabalho compõem o contexto contábil da atividade.",
          media: null,
        },
        {
          index: "03",
          title: "Prazos e obrigações",
          description:
            "A organização dos registros permite acompanhar as responsabilidades aplicáveis à operação.",
          media: null,
        },
      ],
    },
    faq: {
      eyebrow: "DÚVIDAS FREQUENTES",
      title: "Dúvidas de quem atua na advocacia.",
      description:
        "Respostas sobre faturamento, documentos e obrigações da atividade.",
      questions: [
        {
          question: "Quais informações da atividade jurídica são relevantes?",
          answer:
            "Documentos de faturamento, registros de receitas, comprovantes de despesas e informações da estrutura de trabalho ajudam a contextualizar a operação.",
        },
        {
          question: "Como os contratos se relacionam com o faturamento?",
          answer:
            "Os contratos registram as condições combinadas, enquanto os documentos de faturamento identificam os serviços registrados em cada período.",
        },
        {
          question: "As despesas do escritório precisam ser documentadas?",
          answer:
            "Sim. Comprovantes e identificação das despesas ajudam a manter os registros contábeis organizados.",
        },
        {
          question: "Como envio documentos para a Save?",
          answer:
            "Os canais e as informações necessárias são alinhados com a equipe no início do acompanhamento.",
        },
        {
          question: "Já tenho contador. Posso migrar para a Save?",
          answer:
            "Sim. A Save começa entendendo o cenário atual e orienta as informações iniciais e os próximos passos da mudança.",
        },
      ],
    },
  },
  telecomunicacoes: {
    pageVariant: "operations-map",
    tone: "charcoal",
    hero: {
      title: "Contabilidade para telecomunicações.",
      description:
        "Acompanhamento das rotinas contábeis, fiscais e trabalhistas da operação.",
      media: null,
    },
    narrative: {
      title: "Informações conectadas à rotina da operação.",
      origin: { kicker: "Operação", label: "Telecomunicações" },
      moments: [
        {
          index: "01",
          title: "Contratos e faturamento",
          description:
            "Os registros de contratos, cobranças e documentos emitidos ajudam a acompanhar as receitas de cada período.",
          mapKicker: "Receita",
          mapLabel: "Contratos e faturamento",
        },
        {
          index: "02",
          title: "Estrutura e custos",
          description:
            "Despesas, equipamentos e informações da equipe compõem o contexto contábil da operação.",
          mapKicker: "Estrutura",
          mapLabel: "Custos e recursos",
        },
        {
          index: "03",
          title: "Obrigações e decisões",
          description:
            "Registros organizados apoiam o acompanhamento das obrigações e a leitura das informações da empresa.",
          mapKicker: "Acompanhamento",
          mapLabel: "Obrigações e informações",
        },
      ],
    },
    faq: {
      eyebrow: "DÚVIDAS FREQUENTES",
      title: "Dúvidas de empresas de telecomunicações.",
      description:
        "Informações sobre contratos, estrutura e obrigações da operação.",
      questions: [
        {
          question: "Quais registros de receita precisam ser organizados?",
          answer:
            "Contratos, documentos de faturamento e informações de recebimento ajudam a registrar as receitas de cada período.",
        },
        {
          question: "Como a estrutura da operação entra na contabilidade?",
          answer:
            "Informações de despesas, equipamentos e equipe compõem o contexto usado para registrar e compreender a operação.",
        },
        {
          question: "As obrigações variam conforme a empresa?",
          answer:
            "Sim. A atividade, a estrutura e o enquadramento da empresa influenciam quais informações e obrigações devem ser acompanhadas.",
        },
        {
          question: "Como a Save conhece a rotina da empresa?",
          answer:
            "No primeiro contato, a equipe conversa sobre a atividade, a estrutura e os registros existentes para entender as necessidades da operação.",
        },
        {
          question: "Já tenho contador. Posso migrar para a Save?",
          answer:
            "Sim. A Save entende o cenário atual e orienta as informações iniciais e os próximos passos da mudança de contabilidade.",
        },
      ],
    },
  },
};
