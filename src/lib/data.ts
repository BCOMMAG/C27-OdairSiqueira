export interface OfficeInfo {
  name: string;
  shortName: string;
  lawyer: string;
  oab: string;
  role: string;
  tagline: string;
  slogan: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  instagramUrl?: string;
  instagramHandle?: string;
  linkedinUrl: string;
  linkedinHandle: string;
  facebookUrl: string;
  facebookHandle: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  mapsDirectionsUrl: string;
  mapsEmbedUrl: string;
  schedule: {
    weekdays: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

export const OFFICE_INFO: OfficeInfo = {
  name: "Odair Siqueira Advocacia",
  shortName: "Odair Siqueira Advocacia",
  lawyer: "Odair Siqueira",
  oab: "OAB/PR 91.151",
  role: "Direito do Trabalho • Direito de Família • Consultoria Jurídica",
  tagline: "Defesa jurídica técnica, estratégica e humanizada com excelência e segurança.",
  slogan: "Soluções preventivas e atuação contenciosa pautadas por honestidade, dedicação e rigor técnico.",
  phone: "(41) 99644-5164",
  whatsapp: "5541996445164",
  whatsappNumber: "5541996445164",
  whatsappFormatted: "(41) 99644-5164",
  whatsappUrl:
    "https://wa.me/5541996445164?text=Ol%C3%A1!%20Acessei%20o%20site%20da%20Odair%20Siqueira%20Advocacia%20e%20gostaria%20de%20buscar%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
  linkedinUrl: "https://www.linkedin.com/in/odair-siqueira-advogado-a1393029/",
  linkedinHandle: "odair-siqueira-advogado-a1393029",
  facebookUrl: "https://www.facebook.com/odairsiqueiraadvogado",
  facebookHandle: "odairsiqueiraadvogado",
  address: "R. Paraíba - Atuba, Colombo - PR, 83404-300",
  addressShort: "R. Paraíba - Atuba, Colombo/PR",
  city: "Colombo",
  state: "PR",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.+Para%C3%ADba+-+Atuba,+Colombo+-+PR,+83404-300",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=R.+Para%C3%ADba+-+Atuba,+Colombo+-+PR,+83404-300&output=embed",
  schedule: {
    weekdays: "Segunda a Quinta: 09:00 às 17:00",
    friday: "Sexta-feira: 09:00 às 12:00",
    saturday: "Fechado",
    sunday: "Fechado",
  },
};

export interface LawyerProfile {
  name: string;
  oab: string;
  role: string;
  graduation: string;
  bio: string[];
  mission: string;
  vision: string;
  values: string;
  careerHighlights: string[];
  differentials: string[];
}

export const LAWYER_PROFILE: LawyerProfile = {
  name: "Odair Siqueira",
  oab: "OAB/PR 91.151",
  role: "Advogado Titular • Especialista em Direito do Trabalho e Processo Trabalhista",
  graduation:
    "Pós-Graduado em Direito do Trabalho e Processo Trabalhista (UNINTER) • Bacharel em Direito (Universidade Tuiuti do Paraná - UTP)",
  bio: [
    "Odair Siqueira é advogado titular regularmente inscrito na Ordem dos Advogados do Brasil sob o registro OAB/PR 91.151, dedicando sua prática à defesa contundente e humanizada dos direitos de trabalhadores, famílias e empresas.",
    "Graduou-se em Direito pela conceituada Universidade Tuiuti do Paraná (UTP, 2012–2017) e concluiu Pós-Graduação especializada em Direito do Trabalho e Processo Trabalhista pelo Centro Universitário Internacional UNINTER (2019–2020), desenvolvendo sólida expertise técnica no contencioso e consultivo trabalhista.",
    "Com sede física em Colombo/PR (bairro Atuba) e suporte para atendimento online em todo o Estado do Paraná, orienta seus clientes com honestidade, comunicação transparente e precisão jurídica para transformar incertezas em soluções seguras.",
  ],
  mission:
    "Oferecer serviços jurídicos de alta qualidade em defesa do cliente, desenvolvendo alternativas preventivas e contenciosas com honestidade, excelência técnica e segurança jurídica.",
  vision:
    "Atuação de referência no contencioso, consultivo, direito coletivo e extrajudicial, encontrando soluções justas e sustentáveis com rigor e agilidade.",
  values:
    "Valores éticos e morais inegociáveis, pautados pelo comprometimento, dedicação profunda, honestidade, respeito ao cidadão e proatividade resolutiva.",
  careerHighlights: [
    "Inscrição regular e ativa na Ordem dos Advogados do Brasil (OAB/PR 91.151) desde 2017.",
    "Pós-Graduação em Direito do Trabalho e Processo Trabalhista pela UNINTER (2019–2020).",
    "Bacharelado em Direito pela Universidade Tuiuti do Paraná - UTP (2012–2017).",
    "Sede física estabelecida em Colombo/PR (Atuba) com recepção presencial e plataforma digital.",
    "Conformidade ética estrita com o Provimento nº 205/2021 do Conselho Federal da OAB.",
  ],
  differentials: [
    "Expertise Trabalhista Dedicada: Domínio aprofundado de cálculos rescisórios, jornada extraordinária, adicionais e defesas corporativas.",
    "Acolhimento Humanizado em Família: Sensibilidade, discrição e firmeza na condução de divórcios, alimentos, guarda e proteção a menores.",
    "Consultoria Preventiva Estratégica: Mapeamento precoce de vulnerabilidades para evitar contingências e passivos judiciais.",
    "Atendimento Direto e Transparente: Esclarecimento técnico acessível, sem rodeios e com acompanhamento passo a passo do cliente.",
  ],
};

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  iconName: string;
  featured: boolean;
  highlightText: string;
  coverageList: string[];
  casesSummary: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "direito-do-trabalho",
    title: "Direito do Trabalho",
    subtitle: "Defesa dos direitos laborais, cálculos de rescisão e assessoria consultiva",
    shortDesc:
      "Atuação técnica em ações trabalhistas para recebimento de verbas, horas extras, rescisão indireta, vínculo e defesa patronal.",
    description:
      "O Direito do Trabalho assegura o equilíbrio nas relações entre colaboradores e empresas. Atuamos com extrema precisão técnica em cálculos de verbas rescisórias, horas extras não remuneradas, equiparação salarial, desvio de função, assédio moral e rescisão indireta, além de assessoria preventiva e contenciosa para empregadores.",
    iconName: "Briefcase",
    featured: true,
    highlightText: "Cálculos matemáticos de alta precisão e defesa contundente dos direitos e garantias trabalhistas.",
    coverageList: [
      "Cobrança de Horas Extras e Reflexos em DSR, Férias, 13º Salário e FGTS",
      "Conferência Minuciosa e Execução de Verbas Rescisórias Inadimplidas",
      "Ação de Reconhecimento de Vínculo Empregatício (Trabalho sem CTPS Assinada)",
      "Rescisão Indireta por Falta Grave do Empregador (Artigo 483 da CLT)",
      "Indenização por Danos Morais, Assédio Moral e Sobrecarga Desumana de Trabalho",
      "Adicionais de Insalubridade e Periculosidade com Acompanhamento Pericial",
      "Defesas Trabalhistas e Consultoria de Conformidade Preventiva para Empresas",
    ],
    casesSummary:
      "Análise aprofundada de cartões de ponto, extratos de FGTS e comunicações digitais para apuração do valor real devido no contrato de trabalho.",
  },
  {
    id: "direito-de-familia",
    title: "Direito de Família",
    subtitle: "Acolhimento humanizado e segurança jurídica para momentos delicados da vida familiar",
    shortDesc:
      "Fixação e revisão de alimentos, guarda compartilhada, divórcio consensual ou litigioso e partilha de bens.",
    description:
      "As questões de Direito de Família exigem técnica processual apurada combinada com escuta atenta, discrição e empatia. Conduzimos ações de pensão alimentícia, guarda unilateral e compartilhada, regime de convivência, divórcios judiciais e em cartório, reconhecimento e dissolução de união estável, sempre priorizando a proteção de incapazes e a segurança patrimonial sob segredo de justiça.",
    iconName: "HeartHandshake",
    featured: true,
    highlightText: "Atendimento ético e sigiloso, resguardando os laços afetivos e o patrimônio da família.",
    coverageList: [
      "Ação de Alimentos (Fixação, Revisão e Exoneração de Pensão Alimentícia)",
      "Execução de Alimentos sob Rito de Prisão Civil (Art. 528 do CPC) e Penhora de Bens",
      "Regulamentação de Guarda e Convivência Familiar (Melhor Interesse do Menor)",
      "Divórcio Consensual em Cartório e Divórcio Litigioso Judicial",
      "Partilha Justa de Bens e Apuração de Meação Patrimonial",
      "Reconhecimento e Dissolução de União Estável com Partilha de Bens Comuns",
      "Combate à Alienação Parental e Medidas Cautelares Protetivas de Urgência",
    ],
    casesSummary:
      "Orientação estratégica e segura para resolução pacífica de conflitos familiares ou defesa contundente em litígios complexos.",
  },
  {
    id: "consultoria-juridica",
    title: "Consultoria Jurídica & Prevenção",
    subtitle: "Diagnóstico precoce de riscos, conformidade legal e decisões estratégicas seguras",
    shortDesc:
      "Auditoria jurídica, elaboração e revisão de contratos, análise de passivos e blindagem preventiva de conflitos.",
    description:
      "A advocacia preventiva evita litígios desgastantes e despesas imprevistas antes que se tornem processos judiciais. Realizamos auditorias contratuais, diagnóstico de conformidade trabalhista para empregadores, estruturação de termos e consultoria contínua, permitindo que cidadãos e empresas tomem decisões com total amparo legal.",
    iconName: "ShieldCheck",
    featured: true,
    highlightText: "Prevenção estratégica que resguarda patrimônio, economiza tempo e evita litígios judiciais.",
    coverageList: [
      "Auditoria Jurídica Preventiva de Rotinas Trabalhistas e Contratuais",
      "Elaboração, Revisão e Negociação de Contratos Civis e Comerciais",
      "Pareceres Jurídicos e Análise Prospectiva de Riscos Legais",
      "Assessoria Preventiva a Empregadores para Redução de Passivo Trabalhista",
      "Estruturação de Acordos de Confidencialidade (NDA) e Não Concorrência",
      "Mediação Extrajudicial e Negociação Estratégica de Acordos Amigáveis",
      "Consultoria Jurídica Sob Medida para PMEs e Empreendedores",
    ],
    casesSummary:
      "Mapeamento estruturado de vulnerabilidades e implementação de rotinas seguras para salvaguardar a estabilidade do negócio.",
  },
];

export interface Review {
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  source: string;
  details?: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Polaca",
    rating: 5,
    timeAgo: "6 meses atrás",
    text: "Um excelente advogado, me ajudou e ainda me ajuda muito com algumas questões. Super recomendo.",
    source: "Google Reviews",
    details: "3 avaliações",
  },
  {
    author: "Franciane Alves",
    rating: 5,
    timeAgo: "5 meses atrás",
    text: "Compreensão sempre responsável nas nossas perguntas. Super recomendo.",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Isabel Nogueira",
    rating: 5,
    timeAgo: "6 meses atrás",
    text: "Um excelente profissional, super recomendo seus serviços.",
    source: "Google Reviews",
    details: "2 avaliações",
  },
  {
    author: "Sonia mara rodrigues do amaral Sonia",
    rating: 5,
    timeAgo: "6 meses atrás",
    text: "Ótimo profissional, super recomendo...",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Ana Vitória Reichmann",
    rating: 5,
    timeAgo: "6 meses atrás",
    text: "Um advogado incrivelmente dedicado e excelente no que faz.",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Eduardo Gonzales",
    rating: 5,
    timeAgo: "6 meses atrás",
    text: "Ótimo profissional, recomendo!",
    source: "Google Reviews",
    details: "4 avaliações",
  },
  {
    author: "Mateus siqueira",
    rating: 5,
    timeAgo: "6 meses atrás",
    text: "Advogado excelente!",
    source: "Google Reviews",
    details: "Local Guide • 12 avaliações • 32 fotos",
  },
  {
    author: "Tereza Miranda Pinheiro",
    rating: 5,
    timeAgo: "6 meses atrás",
    text: "Atendimento acolhedor, transparente e com total clareza nas orientações jurídicas. Recomendo com segurança.",
    source: "Google Reviews",
    details: "2 avaliações",
  },
];

export interface EducationalArticle {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export const ARTICLES: EducationalArticle[] = [
  {
    id: "artigo-rescisao-prazos",
    number: "01",
    title: "Demissão sem Justa Causa: Prazos, Verbas e Como Conferir sua Rescisão",
    category: "Direito do Trabalho",
    readTime: "4 min de leitura",
    summary:
      "Entenda o prazo legal de 10 dias para pagamento das verbas rescisórias e quais direitos devem constar no Termo de Rescisão.",
    content: [
      "Na rescisão contratual sem justa causa, a legislação trabalhista estabelece que o empregador dispõe do prazo improrrogável de até 10 dias corridos para quitar as verbas rescisórias, independentemente de o aviso prévio ter sido trabalhado ou indenizado.",
      "As parcelas devidas englobam saldo de salários, aviso prévio proporcional ao tempo de serviço, 13º salário proporcional, férias vencidas e proporcionais acrescidas do terço constitucional, liberação da chave de saque do FGTS, multa rescisória de 40% sobre o saldo total dos depósitos e fornecimento das guias para seguro-desemprego.",
      "A conferência técnica das bases de cálculo realizada por um advogado é essencial para apurar se horas extras habituais, adicionais e gratificações foram devidamente refletidos no valor rescisório.",
    ],
    oabDisclaimer:
      "Conteúdo puramente educativo com finalidade de orientação pública, em estrita observância ao Provimento 205/2021 da OAB.",
  },
  {
    id: "artigo-pensao-alimenticia-criterios",
    number: "02",
    title: "Pensão Alimentícia: Como é Fixada e o Mito do 'Percentual Automático'",
    category: "Direito de Família",
    readTime: "4 min de leitura",
    summary:
      "Descubra como o Poder Judiciário avalia o trinômio necessidade, possibilidade e proporcionalidade na fixação da pensão alimentícia.",
    content: [
      "Diferente da crença popular de que a pensão alimentícia seria fixada automaticamente em 30% do salário, a lei estabelece a aplicação rigorosa do trinômio necessidade do alimentando, possibilidade financeira do alimentante e proporcionalidade.",
      "A obrigação alimentar abrange habitação, alimentação, educação, saúde, vestuário e lazer do menor. Logo no primeiro despacho, o juiz fixa os alimentos provisórios para garantir o sustento imediato enquanto tramita o processo.",
      "Havendo alteração superveniente na capacidade financeira de quem paga ou nas despesas de quem recebe, a legislação autoriza o ajuizamento de ação revisional de alimentos para restabelecer o equilíbrio justo.",
    ],
    oabDisclaimer:
      "Artigo informativo de interesse social, elaborado nos termos do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-horas-extras-provas",
    number: "03",
    title: "Horas Extras e Banco de Horas: O Que Fazer se o Ponto for Irregular",
    category: "Direito do Trabalho",
    readTime: "5 min de leitura",
    summary:
      "A validade de mensagens de WhatsApp, e-mails e registros eletrônicos como prova de sobrejornada na Justiça do Trabalho.",
    content: [
      "A sobrejornada exercida além das 8 horas diárias e 44 horas semanais sem a devida compensação legal confere direito à remuneração com acréscimo de no mínimo 50% em dias úteis e 100% em domingos e feriados.",
      "Muitos trabalhadores enfrentam a imposição de 'bater o ponto e continuar trabalhando' ou bancos de horas instituídos de maneira informal e irregular. Nesses casos, o princípio da primazia da realidade prevalece sobre os registros formais.",
      "Mensagens trocadas pelo WhatsApp fora do horário de expediente, logs de sistemas, e-mails institucionais, fotos de escalas e testemunhas são provas admitidas pela Justiça do Trabalho para comprovar o efetivo tempo à disposição da empresa.",
    ],
    oabDisclaimer:
      "Material didático elaborado em conformidade com as diretrizes do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-guarda-convivencia",
    number: "04",
    title: "Guarda Compartilhada vs. Unilateral: A Proteção do Menor",
    category: "Direito de Família",
    readTime: "4 min de leitura",
    summary:
      "A distinção jurídica entre custódia física e poder de decisão sobre a vida dos filhos, priorizando o melhor interesse do menor.",
    content: [
      "No ordenamento brasileiro, a guarda compartilhada é a regra geral prioritária, mesmo quando inexiste acordo amistoso entre os genitores. Ela significa que ambos os pais tomam em conjunto as decisões cruciais sobre a vida escolar, médica e social dos filhos.",
      "A guarda compartilhada não se confunde com divisão matemática de dias entre duas casas: estabelece-se uma residência de referência para o menor e um plano de convivência equilibrado e saudável com o outro genitor.",
      "Apenas em circunstâncias graves comprovadas de inaptidão parental ou risco à integridade do menor o magistrado fixará a guarda unilateral a um dos genitores, resguardando sempre o direito de convivência e fiscalização do outro.",
    ],
    oabDisclaimer:
      "Texto estritamente informativo com foco pedagógico, em cumprimento ao Código de Ética e Provimento 205/2021 da OAB.",
  },
  {
    id: "artigo-advocacia-preventiva",
    number: "05",
    title: "Advocacia Preventiva: Como Evitar Passivos Ocultos e Litígios Judiciais",
    category: "Consultoria Jurídica",
    readTime: "4 min de leitura",
    summary:
      "Saiba como a auditoria prévia de contratos e rotinas corporativas protege o patrimônio e reduz custos operacionais.",
    content: [
      "Enquanto o modelo contencioso tradicional atua após o conflito instalado na Justiça, a advocacia preventiva foca na identificação e eliminação antecipada de vulnerabilidades legais.",
      "Para pequenas e médias empresas e prestadores de serviços, a revisão de contratos comerciais, o alinhamento com a legislação trabalhista e a formulação de cláusulas de sigilo (NDA) e não concorrência evitam bloqueios judiciais e contingências financeiras inesperadas.",
      "O investimento continuado em conformidade jurídica preventiva representa uma fração residual do custo e desgaste provocados por um único litígio judicial prolongado.",
    ],
    oabDisclaimer:
      "Artigo educativo de orientação jurídica, elaborado nos termos das normas éticas da OAB.",
  },
];

export const EDUCATIONAL_TOPICS = ARTICLES;

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const WORK_PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Contato Inicial & Escuta",
    subtitle: "Atendimento ágil via WhatsApp ou presencial",
    description:
      "Você entra em contato conosco para relatar sua situação. Ouvimos com atenção e coletamos as primeiras informações para diagnóstico prévio.",
  },
  {
    number: "02",
    title: "Análise Documental & Cálculos",
    subtitle: "Exame minucioso de provas e legislação",
    description:
      "Analisamos contratos, comprovantes, mensagens e documentos do caso, realizando cálculos preliminares para verificar a viabilidade da demanda.",
  },
  {
    number: "03",
    title: "Estratégia Jurídica Clara",
    subtitle: "Definição do plano preventivo ou contencioso",
    description:
      "Apresentamos com transparência os caminhos jurídicos cabíveis, esclarecendo prazos, riscos e perspectivas antes de qualquer tomada de decisão.",
  },
  {
    number: "04",
    title: "Atuação Firme & Acompanhamento",
    subtitle: "Comunicação contínua em cada fase",
    description:
      "Conduzimos o procedimento com rigor técnico perante a Justiça ou em negociações extrajudiciais, mantendo você informado sobre cada andamento.",
  },
];

export const WORK_STEPS = WORK_PROCESS_STEPS;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "direito-do-trabalho",
    label: "Direito do Trabalho",
    iconName: "Briefcase",
    items: [
      {
        id: "faq-trab-1",
        question: "Fui demitido recentemente. Qual é o prazo para entrar com uma ação trabalhista?",
        answer:
          "O prazo prescricional para ajuizar uma ação trabalhista é de até 2 anos contados a partir da data de término do contrato de trabalho (ou do encerramento do aviso prévio). No processo, é possível cobrar os direitos referentes aos últimos 5 anos trabalhados contados retroativamente a partir do dia em que a ação for protocolada.",
      },
      {
        id: "faq-trab-2",
        question: "Em quantos dias a empresa deve pagar a rescisão e o que devo receber?",
        answer:
          "O prazo legal unificado para o pagamento de todas as verbas rescisórias é de até 10 dias corridos a contar do término do contrato, seja o aviso prévio trabalhado ou indenizado. As verbas devidas na demissão sem justa causa incluem saldo de salário, aviso prévio, 13º proporcional, férias vencidas e proporcionais com 1/3, saque do FGTS, multa de 40% e guias de seguro-desemprego.",
      },
      {
        id: "faq-trab-3",
        question: "Não tenho carteira assinada ou o ponto era adulterado. Como posso provar meu direito?",
        answer:
          "Na Justiça do Trabalho vigora o princípio da primazia da realidade. Mensagens de WhatsApp, registros de conversas, e-mails corporativos, fotografias de escalas de plantão, extratos bancários com depósitos de salário, histórico de localização do celular e depoimentos de testemunhas têm força probatória decisiva para demonstrar a relação de trabalho e horas extras.",
      },
      {
        id: "faq-trab-4",
        question: "Posso gravar uma conversa com meu chefe ou superior para usar como prova?",
        answer:
          "Sim. O Supremo Tribunal Federal (STF) consolidou o entendimento de que a gravação ambiental efetuada por um dos interlocutores sem o conhecimento do outro constitui meio de prova plenamente lícito e válido em juízo, desde que a pessoa que grava participe diretamente da conversa.",
      },
      {
        id: "faq-trab-5",
        question: "Estou de atestado médico. A empresa pode me demitir?",
        answer:
          "Não. Durante o período de afastamento com atestado médico idôneo, o contrato de trabalho fica legalmente interrompido. Qualquer comunicação de demissão realizada durante a vigência do atestado médico é nula, devendo o trabalhador ser reintegrado ou ter seus direitos plenamente preservados.",
      },
    ],
  },
  {
    id: "direito-de-familia",
    label: "Direito de Família",
    iconName: "HeartHandshake",
    items: [
      {
        id: "faq-fam-1",
        question: "A pensão alimentícia está atrasada. É permitido proibir as visitas do outro genitor?",
        answer:
          "Não. O direito de convivência e visitas é um direito fundamental da criança e não pode ser utilizado como moeda de troca ou barganha financeira. A inadimplência da pensão alimentícia deve ser cobrada exclusivamente pela via judicial adequada, através de execução de alimentos sob rito de prisão civil (art. 528 do CPC) ou penhora de bens.",
      },
      {
        id: "faq-fam-2",
        question: "Meu filho completou 18 anos. Posso cancelar o pagamento da pensão alimentícia automaticamente?",
        answer:
          "Não. A maioridade civil, por si só, não extingue o dever de prestar alimentos de maneira automática. O alimentante deve ajuizar a devida Ação de Exoneração de Alimentos. Se o filho estiver matriculado em faculdade, curso técnico ou pré-vestibular e não possuir renda própria, a jurisprudência consolidada costuma manter o benefício até os 24 anos ou até a conclusão do curso.",
      },
      {
        id: "faq-fam-3",
        question: "É necessário esperar 3 meses de atraso da pensão para acionar a Justiça?",
        answer:
          "Não. O atraso de uma única parcela mensal já autoriza a propositura da execução de alimentos sob o rito da prisão civil (art. 528 do Código de Processo Civil). A expressão legal de 'até três parcelas anteriores' delimita o montante pretérito que autoriza a prisão, cumulando-se com as parcelas que vencerem no curso da ação.",
      },
      {
        id: "faq-fam-4",
        question: "Moramos juntos em união estável sem papel assinado. Tenho direito à metade dos bens?",
        answer:
          "Sim. A união estável informal é regida subsidiariamente pelo regime da comunhão parcial de bens. Todos os bens e patrimônio adquiridos a título oneroso durante a constância da relação (imóveis, automóveis, investimentos e saldos bancários) pertencem a ambos e devem ser partilhados em 50% para cada parte, comprovando-se a convivência pública por documentos e testemunhas.",
      },
    ],
  },
  {
    id: "consultoria-juridica",
    label: "Consultoria & Prevenção",
    iconName: "ShieldCheck",
    items: [
      {
        id: "faq-cons-1",
        question: "Como a advocacia preventiva auxilia pequenas e médias empresas?",
        answer:
          "A advocacia preventiva atua como uma auditoria permanente nas rotinas da empresa. Revisamos contratos de prestação de serviços, alinhamos rotinas trabalhistas com a CLT e estruturamos acordos parassocietários para evitar ações trabalhistas, multas de fiscalização e disputas societárias que poderiam comprometer o fluxo de caixa do negócio.",
      },
      {
        id: "faq-cons-2",
        question: "O que é um Acordo de Confidencialidade (NDA) e qual a sua importância?",
        answer:
          "O Non-Disclosure Agreement (NDA) é um instrumento contratual vinculante que protege segredos de negócio, banco de dados de clientes, metodologias exclusivas e planos estratégicos. Ao assinar um NDA antes de negociações ou contratações de parceiros, estipulam-se multas expressas em caso de vazamento ou concorrência desleal.",
      },
      {
        id: "faq-cons-3",
        question: "As informações repassadas na consulta jurídica preventiva têm sigilo absoluto?",
        answer:
          "Sim. Todas as comunicações, relatórios e documentos compartilhados entre cliente e advogado são protegidos pelo sigilo profissional incondicional (art. 7º, II do Estatuto da Advocacia – Lei nº 8.906/1994). O objetivo da análise é diagnosticar e sanar falhas com confidencialidade e segurança irrestrita.",
      },
    ],
  },
  {
    id: "atendimento-localizacao",
    label: "Atendimento & Sede",
    iconName: "Clock",
    items: [
      {
        id: "faq-atend-1",
        question: "Onde fica localizada a sede física do escritório?",
        answer:
          "Nosso escritório está localizado na Rua Paraíba, no bairro Atuba em Colombo - PR (CEP 83404-300), com ambiente acolhedor e privativo para atendimento presencial agendado.",
      },
      {
        id: "faq-atend-2",
        question: "Como funciona o atendimento online para quem está em outras cidades?",
        answer:
          "Disponibilizamos consultoria jurídica online 100% segura para clientes de Curitiba, Região Metropolitana e demais localidades do Paraná e do Brasil. Realizamos o envio e conferência segura de documentos via WhatsApp e reuniões por videoconferência com total comodidade.",
      },
      {
        id: "faq-atend-3",
        question: "Quais são os horários de atendimento do escritório?",
        answer:
          "Atendemos de segunda a quinta-feira das 09:00 às 17:00, e às sextas-feiras das 09:00 às 12:00. Aos sábados e domingos o expediente regular permanece fechado, com agendamentos de retornos programados para os dias úteis.",
      },
    ],
  },
];

export const FAQ_DATA = FAQ_CATEGORIES;