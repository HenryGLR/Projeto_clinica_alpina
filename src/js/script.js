const especialidades = [
  {
    nome: "Acupuntura",
    emoji: "🧘",
    resumo: "Técnica terapêutica usada para auxiliar no alívio de dores, tensões e equilíbrio do organismo."
  },
  {
    nome: "Alergologia",
    emoji: "🤧",
    resumo: "Especialidade voltada ao diagnóstico e acompanhamento de alergias respiratórias, alimentares e de pele."
  },
  {
    nome: "Cardiologia",
    emoji: "❤️",
    resumo: "Cuida da saúde do coração, pressão arterial, arritmias e prevenção de doenças cardiovasculares."
  },
  {
    nome: "Cirurgião",
    emoji: "🩹",
    resumo: "Avaliação médica para procedimentos cirúrgicos, pequenas cirurgias e encaminhamentos necessários."
  },
  {
    nome: "Clínica Geral",
    emoji: "🩺",
    resumo: "Atendimento inicial, avaliação geral de saúde, sintomas comuns e encaminhamento para especialistas."
  },
  {
    nome: "Dermatologia",
    emoji: "🧴",
    resumo: "Cuida da pele, cabelos, unhas, manchas, alergias, acne e outras alterações dermatológicas."
  },
  {
    nome: "Endocrinologia",
    emoji: "⚖️",
    resumo: "Acompanha hormônios, diabetes, tireoide, metabolismo, obesidade e alterações hormonais."
  },
  {
    nome: "Fisioterapia",
    emoji: "💪",
    resumo: "Auxilia na recuperação de movimentos, dores musculares, lesões e reabilitação física."
  },
  {
    nome: "Gastroenterologia",
    emoji: "🫃",
    resumo: "Cuida do sistema digestivo, estômago, intestino, refluxo, gastrite e alterações gastrointestinais."
  },
  {
    nome: "Ginecologia",
    emoji: "🌸",
    resumo: "Acompanha a saúde da mulher, prevenção, exames ginecológicos e orientações de rotina."
  },
  {
    nome: "Neurologia",
    emoji: "🧠",
    resumo: "Avalia dores de cabeça, tonturas, alterações neurológicas, memória e sistema nervoso."
  },
  {
    nome: "Nutricionista",
    emoji: "🥗",
    resumo: "Orienta alimentação, controle de peso, hábitos saudáveis e planos nutricionais individualizados."
  },
  {
    nome: "Obstetrícia",
    emoji: "🤰",
    resumo: "Acompanha gestantes, pré-natal, saúde materna e desenvolvimento da gravidez."
  },
  {
    nome: "Oftalmologia",
    emoji: "👁️",
    resumo: "Cuida da saúde dos olhos, visão, grau, prevenção e diagnóstico de alterações oculares."
  },
  {
    nome: "Ortopedia",
    emoji: "🦴",
    resumo: "Avalia ossos, articulações, coluna, dores, fraturas, lesões e problemas musculoesqueléticos."
  },
  {
    nome: "Otorrinolaringologia",
    emoji: "👂",
    resumo: "Cuida de ouvido, nariz e garganta, sinusite, amigdalite, rouquidão e alterações auditivas."
  },
  {
    nome: "Pediatria",
    emoji: "👶",
    resumo: "Atendimento infantil, acompanhamento do crescimento, prevenção e cuidados com crianças."
  },
  {
    nome: "Psicologia",
    emoji: "💬",
    resumo: "Acolhimento emocional, escuta profissional, desenvolvimento pessoal e saúde mental."
  },
  {
    nome: "Psiquiatria",
    emoji: "🧠",
    resumo: "Avaliação e tratamento médico de transtornos emocionais, ansiedade, depressão e saúde mental."
  },
  {
    nome: "Proctologia",
    emoji: "🏥",
    resumo: "Avalia alterações intestinais, hemorroidas, dores, sangramentos e condições da região anal."
  },
  {
    nome: "Urologia",
    emoji: "🚹",
    resumo: "Cuida do sistema urinário e da saúde masculina, próstata, rins, bexiga e vias urinárias."
  },
  {
    nome: "Vascular",
    emoji: "🩸",
    resumo: "Acompanha circulação, varizes, dores nas pernas, vasos sanguíneos e saúde vascular."
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
    observacao: "Marcar diretamente no convênio. Nenhum exame é realizado.",
    especialidades: [
      "Cardiologia",
      "Clínica Geral",
      "Dermatologia",
      "Endocrinologia",
      "Gastroenterologia",
      "Ginecologia",
      "Ortopedia",
      "Otorrinolaringologia",
      "Pediatria",
      "Urologia"
    ],
    exames: []
  },

  "AMIL": {
    observacao: "Pedir a carteirinha. Nenhum exame é realizado.",
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

  "BIO VIDA": {
    observacao: "",
    especialidades: [
      "Clínica Geral",
      "Pediatria"
    ],
    exames: [
      "Sangue",
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
    observacao: "Nenhum exame é realizado.",
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
    observacao: "Paciente deve trazer a guia.",
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

  "GARANTIA SAÚDE": {
    observacao: "Nenhum exame é realizado.",
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
      "Sangue",
      "Anátomo Patológico"
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
      "Sangue",
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

  "SÃO MIGUEL": {
    observacao: "Pegamos apenas Clínico Geral e Cardiologia.",
    especialidades: [
      "Cardiologia",
      "Clínica Geral"
    ],
    exames: [
      "Eletrocardiograma",
      "Raio-X"
    ]
  },

  "SEGUROS UNIMED": {
    observacao: "Nenhum exame é realizado.",
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
    observacao: "Paciente deve trazer a guia. Nenhum exame é realizado.",
    especialidades: [
      "Endocrinologia",
      "Gastroenterologia",
      "Neurologia",
      "Otorrinolaringologia"
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

  "TEMPO ASSIST": {
    observacao: "Paciente deve trazer autorização. Nenhum exame é realizado.",
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

  "UNIHOSP": {
    observacao: "",
    especialidades: [
      "Clínica Geral",
      "Pediatria"
    ],
    exames: [
      "Sangue",
      "Papanicolau",
      "Eletrocardiograma",
      "Inalação",
      "Medicação",
      "Raio-X"
    ]
  },

  "UBB": {
    observacao: "Consulta R$90. Nutrição e Psicologia R$50. Nenhum exame é realizado.",
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
    "VIVEST": {
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

  "PREVENT SENIOR": {
    observacao: "Nenhum exame é realizado.",
    especialidades: [
      "Psiquiatria",
      "Otorrinolaringologia"
    ],
    exames: []
  }
};

const medicosPorEspecialidade = {};

nomesEspecialidades.forEach(especialidade => {
  medicosPorEspecialidade[especialidade] = [
    `Equipe ${especialidade}`
  ];
});

const listaEspecialidades = document.getElementById("listaEspecialidades");
const buscaEspecialidade = document.getElementById("buscarEspecialidade");

const convenioSelect = document.getElementById("convenio");
const especialidadeSelect = document.getElementById("especialidade");
const medicoSelect = document.getElementById("medico");

const consultaConvenio = document.getElementById("consultaConvenio");

const resultadoEspecialidades = document.getElementById("resultadoEspecialidades");
const resultadoExames = document.getElementById("resultadoExames");
const resultadoObservacao = document.getElementById("resultadoObservacao");

const avisoConvenio = document.getElementById("avisoConvenio");

function renderizarEspecialidades(lista) {

  if(!listaEspecialidades) return;

  listaEspecialidades.innerHTML = "";

  lista.forEach(item => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="emoji">${item.emoji}</div>
      <h3>${item.nome}</h3>
      <p>${item.resumo}</p>
      <a href="#agendamento">Agendar consulta →</a>
    `;

    listaEspecialidades.appendChild(card);

  });
}

function preencherConvenios() {

  Object.keys(convenios).forEach(nome => {

    if(convenioSelect){
      const option = document.createElement("option");
      option.value = nome;
      option.textContent = nome;
      convenioSelect.appendChild(option);
    }

    if(consultaConvenio){
      const option2 = document.createElement("option");
      option2.value = nome;
      option2.textContent = nome;
      consultaConvenio.appendChild(option2);
    }

  });

}

function atualizarEspecialidadesAgendamento() {

  if(!convenioSelect) return;

  const convenioAtual = convenioSelect.value;
  const dados = convenios[convenioAtual];

  especialidadeSelect.innerHTML = "";

  dados.especialidades.forEach(item => {

    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;

    especialidadeSelect.appendChild(option);

  });

  if(dados.observacao){

    avisoConvenio.style.display = "block";
    avisoConvenio.textContent = dados.observacao;

  }else{

    avisoConvenio.style.display = "none";

  }

  atualizarMedicos();
}

function atualizarMedicos() {

  if(!especialidadeSelect) return;

  medicoSelect.innerHTML = "";

  const especialidadeAtual = especialidadeSelect.value;

  const lista = medicosPorEspecialidade[especialidadeAtual] || [
    "Equipe Clínica Vila Alpina"
  ];

  lista.forEach(item => {

    const option = document.createElement("option");

    option.value = item;
    option.textContent = item;

    medicoSelect.appendChild(option);

  });

}

function atualizarConsultaConvenio() {

  if(!consultaConvenio) return;

  const convenioAtual = consultaConvenio.value;
  const dados = convenios[convenioAtual];

  resultadoEspecialidades.innerHTML = "";
  resultadoExames.innerHTML = "";

  dados.especialidades.forEach(item => {

    const chip = document.createElement("span");

    chip.classList.add("chip");
    chip.textContent = item;

    resultadoEspecialidades.appendChild(chip);

  });

  if(dados.exames.length > 0){

    dados.exames.forEach(item => {

      const chip = document.createElement("span");

      chip.classList.add("chip","exame");
      chip.textContent = item;

      resultadoExames.appendChild(chip);

    });

  }else{

    const chip = document.createElement("span");

    chip.classList.add("chip","vazio");
    chip.textContent = "Nenhum exame disponível";

    resultadoExames.appendChild(chip);

  }

  if(dados.observacao){

    resultadoObservacao.style.display = "block";
    resultadoObservacao.textContent = dados.observacao;

  }else{

    resultadoObservacao.style.display = "none";

  }

}

if(buscaEspecialidade){

  buscaEspecialidade.addEventListener("input", () => {

    const termo = buscaEspecialidade.value.toLowerCase();

    const filtrado = especialidades.filter(item =>
      item.nome.toLowerCase().includes(termo)
    );

    renderizarEspecialidades(filtrado);

  });

}

if(convenioSelect){
  convenioSelect.addEventListener("change", atualizarEspecialidadesAgendamento);
}

if(especialidadeSelect){
  especialidadeSelect.addEventListener("change", atualizarMedicos);
}

if(consultaConvenio){
  consultaConvenio.addEventListener("change", atualizarConsultaConvenio);
}

const form = document.getElementById("formAgendamento");

if(form){

  form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const data = document.getElementById("data").value;

    const convenio = convenioSelect.value;
    const especialidade = especialidadeSelect.value;
    const medico = medicoSelect.value;

    const observacao = document.getElementById("observacao").value;

    const mensagem = `
Olá! Gostaria de solicitar um agendamento.

👤 Nome: ${nome}
📞 Telefone: ${telefone}
📅 Data desejada: ${data}

🤝 Convênio: ${convenio}
🩺 Especialidade: ${especialidade}
👨‍⚕️ Médico/Equipe: ${medico}

📝 Observações:
${observacao}
`;

    const numero = "5511959701266";

    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(link,"_blank");

  });

}

renderizarEspecialidades(especialidades);

preencherConvenios();

if(convenioSelect){
  atualizarEspecialidadesAgendamento();
}

if(consultaConvenio){
  atualizarConsultaConvenio();
}