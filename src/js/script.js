"use strict";

const CAMINHO_IMAGENS = "src/assets";

const especialidades = [
  {
    nome: "Acupuntura",
    imagem: `${CAMINHO_IMAGENS}/ACUPUNTURA.jpg`,
    resumo: "Técnica terapêutica utilizada para auxiliar no alívio de dores, tensões e equilíbrio do organismo."
  },
  {
    nome: "Alergologia",
    imagem: `${CAMINHO_IMAGENS}/ALERGOLOGISTA.jpg`,
    resumo: "Diagnóstico e acompanhamento de alergias respiratórias, alimentares e de pele."
  },
  {
    nome: "Cardiologia",
    imagem: `${CAMINHO_IMAGENS}/CARDIOLOGISTA.jpg`,
    resumo: "Cuida da saúde do coração, pressão arterial, arritmias e prevenção cardiovascular."
  },
  {
    nome: "Cirurgião",
    imagem: `${CAMINHO_IMAGENS}/CIRURGIAO.jpg`,
    resumo: "Avaliação médica para procedimentos cirúrgicos, pequenas cirurgias e encaminhamentos."
  },
  {
    nome: "Clínica Geral",
    imagem: `${CAMINHO_IMAGENS}/CLINICO.jpg`,
    resumo: "Atendimento inicial, avaliação geral da saúde e encaminhamento para especialistas."
  },
  {
    nome: "Dermatologia",
    imagem: `${CAMINHO_IMAGENS}/DERMATO.jpg`,
    resumo: "Cuida da pele, cabelos, unhas, manchas, alergias, acne e outras alterações dermatológicas."
  },
  {
    nome: "Endocrinologia",
    imagem: `${CAMINHO_IMAGENS}/ENDOCRINO.jpg`,
    resumo: "Acompanha hormônios, diabetes, tireoide, metabolismo e alterações hormonais."
  },
  {
    nome: "Fisioterapia",
    imagem: `${CAMINHO_IMAGENS}/FISIOTERAPIA.jpg`,
    resumo: "Auxilia na recuperação de movimentos, dores musculares, lesões e reabilitação física."
  },
  {
    nome: "Gastroenterologia",
    imagem: `${CAMINHO_IMAGENS}/GASTROO.jpg`,
    resumo: "Cuida do sistema digestivo, estômago, intestino, refluxo, gastrite e outras alterações."
  },
  {
    nome: "Ginecologia",
    imagem: `${CAMINHO_IMAGENS}/GINECO.jpg`,
    resumo: "Acompanha a saúde da mulher, prevenção, exames ginecológicos e orientações."
  },
  {
    nome: "Neurologia",
    imagem: `${CAMINHO_IMAGENS}/NEURO.jpg`,
    resumo: "Avalia dores de cabeça, tonturas, memória, alterações neurológicas e sistema nervoso."
  },
  {
    nome: "Nutricionista",
    imagem: `${CAMINHO_IMAGENS}/NUTRI.jpg`,
    resumo: "Orienta a alimentação, o controle de peso, hábitos saudáveis e planos nutricionais."
  },
  {
    nome: "Obstetrícia",
    imagem: `${CAMINHO_IMAGENS}/OBSTETRICIA.jpg`,
    resumo: "Acompanha gestantes, pré-natal, saúde materna e desenvolvimento da gravidez."
  },
  {
    nome: "Oftalmologia",
    imagem: `${CAMINHO_IMAGENS}/OFTALMO.jpg`,
    resumo: "Cuida da saúde dos olhos, visão, grau e diferentes alterações oculares."
  },
  {
    nome: "Ortopedia",
    imagem: `${CAMINHO_IMAGENS}/ORTOPEDISTA.jpg`,
    resumo: "Avalia ossos, articulações, coluna, dores, fraturas e lesões musculoesqueléticas."
  },
  {
    nome: "Otorrinolaringologia",
    imagem: `${CAMINHO_IMAGENS}/OTORRINO.jpg`,
    resumo: "Cuida de ouvido, nariz e garganta, sinusite, rouquidão e alterações auditivas."
  },
  {
    nome: "Pediatria",
    imagem: `${CAMINHO_IMAGENS}/PEDIATRAA.jpg`,
    resumo: "Atendimento infantil, acompanhamento do crescimento, prevenção e cuidados com crianças."
  },
  {
    nome: "Pneumologia",
    imagem: `${CAMINHO_IMAGENS}/PNEUMOLOGISTA.jpg`,
    resumo: "Cuida dos pulmões, falta de ar, tosse, asma e outras doenças respiratórias."
  },
  {
    nome: "Psicologia",
    imagem: `${CAMINHO_IMAGENS}/PSICOLOGIA.jpg`,
    resumo: "Acolhimento emocional, escuta profissional, desenvolvimento pessoal e saúde mental."
  },
  {
    nome: "Psiquiatria",
    imagem: `${CAMINHO_IMAGENS}/PSIQUIATRIA.jpg`,
    resumo: "Avaliação e tratamento médico de ansiedade, depressão e outras condições de saúde mental."
  },
  {
    nome: "Proctologia",
    imagem: `${CAMINHO_IMAGENS}/PROCTOLOGISTA.jpg`,
    resumo: "Avalia alterações intestinais, hemorroidas, dores, sangramentos e outras condições."
  },
  {
    nome: "Urologia",
    imagem: `${CAMINHO_IMAGENS}/UROLOGISTA.jpg`,
    resumo: "Cuida do sistema urinário, próstata, rins, bexiga e saúde masculina."
  },
  {
    nome: "Vascular",
    imagem: `${CAMINHO_IMAGENS}/VASCULAR.jpg`,
    resumo: "Acompanha circulação, varizes, dores nas pernas e alterações dos vasos sanguíneos."
  }
];

const nomesEspecialidades = especialidades.map(item => item.nome);

const convenios = {
  "Particular": {
    observacao: "",
    especialidades: nomesEspecialidades,
    exames: []
  },

  "AMEPLAN": {
    observacao: "O agendamento da AMEPLAN deve ser realizado diretamente pelo convênio.",
    especialidades: [],
    exames: []
  },

  "AMIL": {
    observacao: "A clínica não realiza exames por este convênio.",
    especialidades: [
      "Cardiologia",
      "Cirurgião",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Gastroenterologia",
      "Ginecologia",
      "Neurologia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Psiquiatria",
      "Urologia"
    ],
    exames: []
  },

  "BIO VIDA": {
    observacao: "",
    especialidades: [
      "Clínica Geral",
      "Pediatria"
    ],
    exames: [
      "Exames de sangue",
      "Papanicolau",
      "Eletrocardiograma",
      "Medicação",
      "Raio-X"
    ]
  },

  "BLUE SAÚDE": {
    observacao: "",
    especialidades: [
      "Cardiologia",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Fisioterapia",
      "Gastroenterologia",
      "Ginecologia",
      "Psiquiatria",
      "Urologia"
    ],
    exames: [
      "Audiometria",
      "Ecocardiograma",
      "Eletrocardiograma",
      "Eletroencefalograma",
      "Holter 24h",
      "Infiltração",
      "Lavagem de Ouvido",
      "MAPA 24h",
      "Mapeamento de Retina",
      "Nasofibroscopia",
      "Otoneurológico",
      "Prova de Função Pulmonar",
      "Raio-X",
      "Teste Ergométrico",
      "Ultrassonografia",
      "Tomografia",
      "Mamografia",
      "Densitometria"
    ]
  },

  "BLUEMED / ALVORECER": {
    observacao: "",
    especialidades: [
      "Cardiologia",
      "Cirurgião",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Gastroenterologia",
      "Ginecologia",
      "Neurologia",
      "Ortopedia",
      "Otorrinolaringologia",
      "Pediatria",
      "Urologia",
      "Vascular"
    ],
    exames: [
      "Audiometria",
      "Eletrocardiograma",
      "Medicação",
      "Raio-X"
    ]
  },

  "CENTRAL NACIONAL UNIMED": {
    observacao: "",
    especialidades: [
      "Cardiologia",
      "Cirurgião",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Fisioterapia",
      "Gastroenterologia",
      "Ginecologia",
      "Neurologia",
      "Ortopedia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Psicologia",
      "Psiquiatria",
      "Urologia",
      "Vascular"
    ],
    exames: [
      "Eletrocardiograma",
      "Ultrassonografia"
    ]
  },

  "ECOCONSUMIDOR": {
    observacao: "A clínica não realiza exames por este convênio.",
    especialidades: [
      "Cardiologia",
      "Cirurgião",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Gastroenterologia",
      "Ginecologia",
      "Neurologia",
      "Ortopedia",
      "Otorrinolaringologia",
      "Pediatria",
      "Psiquiatria",
      "Urologia",
      "Vascular"
    ],
    exames: []
  },

  "ECONOMUS": {
    observacao: "O paciente deve apresentar a guia.",
    especialidades: [
      "Cardiologia",
      "Dermatologia",
      "Endocrinologia",
      "Gastroenterologia",
      "Ginecologia",
      "Neurologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Urologia",
      "Vascular"
    ],
    exames: [
      "Ecocardiograma"
    ]
  },

  "GAMA SAÚDE / AMPLA": {
    observacao: "",
    especialidades: [
      "Clínica Geral",
      "Dermatologia",
      "Ginecologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Vascular"
    ],
    exames: [
      "Exames de sangue",
      "Anatomopatológico"
    ]
  },

  "GARANTIA SAÚDE": {
    observacao: "A clínica não realiza exames por este convênio.",
    especialidades: [
      "Cardiologia",
      "Clínica Geral",
      "Dermatologia",
      "Ginecologia",
      "Ortopedia",
      "Otorrinolaringologia",
      "Pediatria"
    ],
    exames: []
  },

  "GEAP": {
    observacao: "",
    especialidades: [
      "Cardiologia",
      "Cirurgião",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Fisioterapia",
      "Gastroenterologia",
      "Ginecologia",
      "Neurologia",
      "Ortopedia",
      "Oftalmologia",
      "Pediatria",
      "Psiquiatria",
      "Urologia",
      "Vascular"
    ],
    exames: [
      "Audiometria",
      "Ecocardiograma",
      "Eletrocardiograma",
      "Eletroencefalograma",
      "Holter 24h",
      "Lavagem de Ouvido",
      "Prova de Função Pulmonar",
      "Teste Ergométrico"
    ]
  },

  "MEDSELECT": {
    observacao: "",
    especialidades: [
      "Cardiologia",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Fisioterapia",
      "Ginecologia",
      "Neurologia",
      "Nutricionista",
      "Ortopedia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Psicologia",
      "Psiquiatria",
      "Vascular"
    ],
    exames: [
      "Audiometria",
      "Ecocardiograma",
      "Eletrocardiograma",
      "Eletroencefalograma",
      "Holter 24h",
      "MAPA 24h",
      "Mapeamento Cerebral",
      "Mapeamento de Retina",
      "Nasofibroscopia",
      "Otoneurológico",
      "Prova de Função Pulmonar",
      "Raio-X",
      "Ultrassonografia",
      "Tomografia",
      "Densitometria Óssea",
      "Mamografia"
    ]
  },

  "MEDSENIOR": {
    observacao: "",
    especialidades: [
      "Cardiologia",
      "Dermatologia",
      "Otorrinolaringologia"
    ],
    exames: [
      "Ecocardiograma",
      "Eletrocardiograma",
      "Ultrassonografia",
      "Tomografia",
      "Mamografia",
      "Densitometria"
    ]
  },

  "MEDSERVICE": {
    observacao: "",
    especialidades: [
      "Alergologia",
      "Cardiologia",
      "Cirurgião",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Fisioterapia",
      "Gastroenterologia",
      "Ginecologia",
      "Neurologia",
      "Nutricionista",
      "Ortopedia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Psicologia",
      "Psiquiatria",
      "Urologia",
      "Vascular"
    ],
    exames: [
      "Exames de sangue",
      "Audiometria",
      "Papanicolau",
      "Ecocardiograma",
      "Eletrocardiograma",
      "Eletroencefalograma",
      "Gesso",
      "Inalação",
      "Lavagem de Ouvido",
      "Mapeamento de Retina",
      "Medicação",
      "Prova de Função Pulmonar",
      "Raio-X",
      "Teste Ergométrico",
      "Ultrassonografia",
      "Tomografia",
      "Densitometria",
      "Mamografia"
    ]
  },

  "NEW LEADER": {
    observacao: "O paciente deve apresentar autorização.",
    especialidades: [
      "Alergologia",
      "Cardiologia",
      "Cirurgião",
      "Clínica Geral",
      "Dermatologia",
      "Fisioterapia",
      "Gastroenterologia",
      "Ginecologia",
      "Neurologia",
      "Nutricionista",
      "Ortopedia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Psicologia",
      "Psiquiatria",
      "Urologia",
      "Vascular"
    ],
    exames: [
      "Audiometria",
      "Ecocardiograma",
      "Eletrocardiograma",
      "Eletroencefalograma",
      "Holter 24h",
      "Gesso",
      "Inalação",
      "Lavagem de Ouvido",
      "MAPA 24h",
      "Otoneurológico",
      "Prova de Função Pulmonar",
      "Raio-X",
      "Teste Ergométrico",
      "Ultrassonografia"
    ]
  },

  "OMINT": {
    observacao: "É necessário apresentar autorização.",
    especialidades: [
      "Alergologia",
      "Cardiologia",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Fisioterapia",
      "Gastroenterologia",
      "Ginecologia",
      "Neurologia",
      "Ortopedia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Proctologia",
      "Psicologia",
      "Psiquiatria",
      "Urologia",
      "Vascular"
    ],
    exames: [
      "Audiometria",
      "Ecocardiograma",
      "Eletrocardiograma",
      "Holter 24h",
      "Gesso",
      "Inalação",
      "Infiltração",
      "Lavagem de Ouvido",
      "Mapeamento Cerebral",
      "Medicação",
      "Nasofibroscopia",
      "Otoneurológico",
      "Raio-X",
      "Teste Ergométrico",
      "Ultrassonografia"
    ]
  },

  "PLENA SAÚDE": {
    observacao: "A clínica não realiza exames por este convênio.",
    especialidades: [
      "Alergologia",
      "Cardiologia",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Gastroenterologia",
      "Ginecologia",
      "Ortopedia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Psiquiatria",
      "Urologia",
      "Vascular"
    ],
    exames: []
  },

  "PORTO ITAÚ": {
    observacao: "",
    especialidades: [
      "Alergologia",
      "Cardiologia",
      "Cirurgião",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Fisioterapia",
      "Gastroenterologia",
      "Ginecologia",
      "Neurologia",
      "Nutricionista",
      "Ortopedia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Pneumologia",
      "Psicologia",
      "Psiquiatria",
      "Urologia",
      "Vascular"
    ],
    exames: [
      "Audiometria",
      "Eletrocardiograma",
      "Gesso",
      "Lavagem de Ouvido",
      "Mapeamento Cerebral",
      "Mapeamento de Retina",
      "Medicação",
      "Nasofibroscopia",
      "Otoneurológico",
      "Prova de Função Pulmonar",
      "Raio-X",
      "Ultrassonografia"
    ]
  },

  "PREVENT SENIOR": {
    observacao: "A clínica não realiza exames por este convênio.",
    especialidades: [
      "Psiquiatria",
      "Otorrinolaringologia"
    ],
    exames: []
  },

  "PROASA": {
    observacao: "",
    especialidades: [
      "Cardiologia",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Fisioterapia",
      "Gastroenterologia",
      "Nutricionista",
      "Ortopedia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Psicologia",
      "Psiquiatria",
      "Urologia"
    ],
    exames: [
      "Audiometria",
      "Biópsia",
      "Ecocardiograma",
      "Eletrocardiograma",
      "Holter 24h",
      "MAPA 24h",
      "Nasofibroscopia",
      "Otoneurológico",
      "Prova de Função Pulmonar",
      "Teste Ergométrico"
    ]
  },

  "SANTA CASA DE MAUÁ": {
    observacao: "",
    especialidades: [
      "Cardiologia",
      "Cirurgião",
      "Clínica Geral",
      "Dermatologia",
      "Gastroenterologia",
      "Ginecologia",
      "Neurologia",
      "Ortopedia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Urologia",
      "Vascular"
    ],
    exames: [
      "Audiometria",
      "Ecocardiograma",
      "Eletrocardiograma",
      "Mapeamento de Retina",
      "Otoneurológico",
      "Raio-X",
      "Teste Ergométrico",
      "Ultrassonografia"
    ]
  },

  "SÃO CRISTÓVÃO": {
    observacao: "",
    especialidades: [
      "Fisioterapia"
    ],
    exames: [
      "Eletrocardiograma",
      "Ecocardiograma"
    ]
  },

  "SÃO MIGUEL": {
    especialidades: [
      "Cardiologia",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Gastroenterologia",
      "Ginecologia",
      "Ortopedia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Psiquiatria",
      "Urologia",
      "Vascular"
    ],
    exames: [
      "Eletrocardiograma",
      "Raio-X"
    ]
  },

  "SEGUROS UNIMED": {
    observacao: "A clínica não realiza exames por este convênio.",
    especialidades: [
      "Cirurgião",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Ginecologia",
      "Neurologia",
      "Nutricionista",
      "Pediatria",
      "Psiquiatria",
      "Vascular"
    ],
    exames: []
  },

  "SISTEMAS": {
    observacao: "O paciente deve apresentar a guia. A clínica não realiza exames por este convênio.",
    especialidades: [
      "Endocrinologia",
      "Gastroenterologia",
      "Neurologia",
      "Otorrinolaringologia"
    ],
    exames: []
  },

  "SUL AMÉRICA": {
    observacao: "",
    especialidades: [
      "Cardiologia",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Ginecologia",
      "Ortopedia",
      "Otorrinolaringologia",
      "Pediatria",
      "Psicologia",
      "Psiquiatria",
      "Vascular"
    ],
    exames: [
      "Exames de sangue",
      "Papanicolau",
      "Eletrocardiograma",
      "Holter 24h",
      "Gesso",
      "Inalação",
      "MAPA 24h",
      "Mapeamento de Retina",
      "Medicação",
      "Prova de Função Pulmonar",
      "Teste Ergométrico"
    ]
  },

  "TEMPO ASSIST": {
    observacao: "O paciente deve apresentar autorização. A clínica não realiza exames por este convênio.",
    especialidades: [
      "Cardiologia",
      "Cirurgião",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Gastroenterologia",
      "Ginecologia",
      "Ortopedia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Urologia",
      "Vascular"
    ],
    exames: []
  },

  "TOTAL MEDCARE": {
    observacao: "",
    especialidades: [
      "Cardiologia",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Fisioterapia",
      "Gastroenterologia",
      "Neurologia",
      "Nutricionista",
      "Ortopedia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Urologia"
    ],
    exames: [
      "Eletrocardiograma",
      "Eletroencefalograma",
      "MAPA 24h",
      "Otoneurológico",
      "Raio-X",
      "Teste Ergométrico",
      "Ultrassonografia",
      "Tomografia"
    ]
  },

  "UBB": {
    observacao: "Consulta médica: R$ 90. Nutrição e Psicologia: R$ 50. A clínica não realiza exames por este convênio.",
    especialidades: [
      "Cardiologia",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Ginecologia",
      "Nutricionista",
      "Otorrinolaringologia",
      "Pediatria",
      "Psicologia"
    ],
    exames: []
  },

  "UNIHOSP": {
    observacao: "",
    especialidades: [
      "Clínica Geral",
      "Pediatria"
    ],
    exames: [
      "Exames de sangue",
      "Papanicolau",
      "Eletrocardiograma",
      "Inalação",
      "Medicação",
      "Raio-X"
    ]
  },

  "VIVEST / CESP": {
    observacao: "",
    especialidades: [
      "Cardiologia",
      "Clínica Geral",
      "Dermatologia",
      "Fisioterapia",
      "Gastroenterologia",
      "Ginecologia",
      "Ortopedia",
      "Oftalmologia",
      "Otorrinolaringologia",
      "Pediatria",
      "Urologia",
      "Vascular"
    ],
    exames: [
      "Eletrocardiograma",
      "Inalação",
      "Lavagem de Ouvido",
      "Medicação",
      "Ultrassonografia"
    ]
  }
};

const listaEspecialidades = document.getElementById("listaEspecialidades");
const buscarEspecialidade = document.getElementById("buscarEspecialidade");
const consultaConvenio = document.getElementById("consultaConvenio");
const resultadoEspecialidades = document.getElementById("resultadoEspecialidades");
const resultadoExames = document.getElementById("resultadoExames");
const resultadoObservacao = document.getElementById("resultadoObservacao");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

function normalizarTexto(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function criarOpcao(valor, texto = valor) {
  const opcao = document.createElement("option");

  opcao.value = valor;
  opcao.textContent = texto;

  return opcao;
}

function criarChip(texto, classeAdicional = "") {
  const chip = document.createElement("span");

  chip.className = `chip ${classeAdicional}`.trim();
  chip.textContent = texto;

  return chip;
}

function ordenarConvenios() {
  const nomes = Object.keys(convenios)
    .filter(nome => nome !== "Particular")
    .sort((a, b) => a.localeCompare(b, "pt-BR"));

  return ["Particular", ...nomes];
}

function mostrarObservacao(mensagem = "") {
  if (!resultadoObservacao) return;

  if (mensagem) {
    resultadoObservacao.textContent = mensagem;
    resultadoObservacao.style.display = "block";
    return;
  }

  resultadoObservacao.textContent = "";
  resultadoObservacao.style.display = "none";
}

function renderizarEspecialidades(lista) {
  if (!listaEspecialidades) return;

  listaEspecialidades.innerHTML = "";

  if (!lista.length) {
    const mensagem = document.createElement("div");

    mensagem.className = "nenhum-resultado";
    mensagem.textContent = "Nenhuma especialidade encontrada.";

    listaEspecialidades.appendChild(mensagem);

    return;
  }

  const fragmento = document.createDocumentFragment();

  lista.forEach(item => {
    const card = document.createElement("article");

    card.className = "card especialidade-card";

    const linkAgendamento =
      `./agendamento.html?especialidade=${encodeURIComponent(item.nome)}`;

    card.innerHTML = `
      <div class="especialidade-imagem-box">
        <img
          src="${item.imagem}"
          alt="Especialidade de ${item.nome}"
          class="especialidade-imagem"
          loading="lazy"
        >
      </div>

      <div class="especialidade-conteudo">
        <h3>${item.nome}</h3>

        <p>${item.resumo}</p>

        <a
          href="${linkAgendamento}"
          class="agendar-especialidade"
          aria-label="Agendar atendimento em ${item.nome}"
        >
          Agendar consulta →
        </a>
      </div>
    `;

    const imagem = card.querySelector(".especialidade-imagem");

    imagem.addEventListener("error", () => {
      imagem.onerror = null;
      imagem.src = `${CAMINHO_IMAGENS}/logo.png`;
      imagem.alt = "Logo da Clínica Médica Vila Alpina";
      imagem.classList.add("imagem-fallback");
    });

    fragmento.appendChild(card);
  });

  listaEspecialidades.appendChild(fragmento);
}

function filtrarEspecialidades() {
  if (!buscarEspecialidade) return;

  const termo = normalizarTexto(buscarEspecialidade.value);

  if (!termo) {
    renderizarEspecialidades(especialidades);
    return;
  }

  const resultado = especialidades.filter(item => {
    const nome = normalizarTexto(item.nome);
    const resumo = normalizarTexto(item.resumo);

    return nome.includes(termo) || resumo.includes(termo);
  });

  renderizarEspecialidades(resultado);
}

function preencherConsultaConvenios() {
  if (!consultaConvenio) return;

  consultaConvenio.innerHTML = "";

  const opcaoInicial = criarOpcao("", "Selecione um convênio");

  opcaoInicial.disabled = true;
  opcaoInicial.selected = true;

  consultaConvenio.appendChild(opcaoInicial);

  ordenarConvenios().forEach(nome => {
    consultaConvenio.appendChild(criarOpcao(nome));
  });
}

function limparResultadoConvenio() {
  if (resultadoEspecialidades) {
    resultadoEspecialidades.innerHTML = "";

    resultadoEspecialidades.appendChild(
      criarChip("Selecione um convênio para consultar", "vazio")
    );
  }

  if (resultadoExames) {
    resultadoExames.innerHTML = "";

    resultadoExames.appendChild(
      criarChip("Selecione um convênio para consultar", "vazio")
    );
  }

  mostrarObservacao("");
}

function atualizarConsultaConvenio() {
  if (
    !consultaConvenio ||
    !resultadoEspecialidades ||
    !resultadoExames
  ) {
    return;
  }

  const convenioSelecionado = consultaConvenio.value;
  const dadosConvenio = convenios[convenioSelecionado];

  resultadoEspecialidades.innerHTML = "";
  resultadoExames.innerHTML = "";

  if (!dadosConvenio) {
    limparResultadoConvenio();
    return;
  }

  if (dadosConvenio.especialidades.length) {
    dadosConvenio.especialidades.forEach(especialidade => {
      resultadoEspecialidades.appendChild(
        criarChip(especialidade)
      );
    });
  } else {
    resultadoEspecialidades.appendChild(
      criarChip("Agendamento direto pelo convênio", "vazio")
    );
  }

  if (dadosConvenio.exames.length) {
    dadosConvenio.exames.forEach(exame => {
      resultadoExames.appendChild(
        criarChip(exame, "exame")
      );
    });
  } else {
    resultadoExames.appendChild(
      criarChip("Nenhum exame disponível pelo convênio", "vazio")
    );
  }

  mostrarObservacao(dadosConvenio.observacao);
}

function alternarMenuMobile() {
  if (!mobileMenuBtn || !mobileNav) return;

  const menuAberto = mobileNav.classList.toggle("active");

  mobileMenuBtn.textContent = menuAberto ? "×" : "☰";

  mobileMenuBtn.setAttribute(
    "aria-expanded",
    String(menuAberto)
  );

  mobileMenuBtn.setAttribute(
    "aria-label",
    menuAberto ? "Fechar menu" : "Abrir menu"
  );
}

function fecharMenuMobile() {
  if (!mobileMenuBtn || !mobileNav) return;

  mobileNav.classList.remove("active");
  mobileMenuBtn.textContent = "☰";
  mobileMenuBtn.setAttribute("aria-expanded", "false");
  mobileMenuBtn.setAttribute("aria-label", "Abrir menu");
}

function adicionarEventos() {
  buscarEspecialidade?.addEventListener(
    "input",
    filtrarEspecialidades
  );

  consultaConvenio?.addEventListener(
    "change",
    atualizarConsultaConvenio
  );

  mobileMenuBtn?.addEventListener(
    "click",
    alternarMenuMobile
  );

  mobileNav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", fecharMenuMobile);
  });

  document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
      fecharMenuMobile();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
      fecharMenuMobile();
    }
  });
}

function inicializarPaginaInicial() {
  renderizarEspecialidades(especialidades);
  preencherConsultaConvenios();
  limparResultadoConvenio();
  adicionarEventos();
}

document.addEventListener(
  "DOMContentLoaded",
  inicializarPaginaInicial
);