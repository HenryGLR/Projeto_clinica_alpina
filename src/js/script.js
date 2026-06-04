const especialidades = [
  { nome:"Acupuntura", emoji:"🧘", resumo:"Técnica terapêutica usada para auxiliar no alívio de dores, tensões e equilíbrio do organismo." },
  { nome:"Alergologia", emoji:"🤧", resumo:"Diagnóstico e acompanhamento de alergias respiratórias, alimentares e de pele." },
  { nome:"Cardiologia", emoji:"❤️", resumo:"Cuida da saúde do coração, pressão arterial, arritmias e prevenção cardiovascular." },
  { nome:"Cirurgião", emoji:"🩹", resumo:"Avaliação médica para procedimentos cirúrgicos, pequenas cirurgias e encaminhamentos." },
  { nome:"Clínica Geral", emoji:"🩺", resumo:"Atendimento inicial, avaliação geral de saúde e encaminhamento para especialistas." },
  { nome:"Dermatologia", emoji:"🧴", resumo:"Cuida da pele, cabelos, unhas, manchas, alergias, acne e alterações dermatológicas." },
  { nome:"Endocrinologia", emoji:"⚖️", resumo:"Acompanha hormônios, diabetes, tireoide, metabolismo e alterações hormonais." },
  { nome:"Fisioterapia", emoji:"💪", resumo:"Auxilia na recuperação de movimentos, dores musculares, lesões e reabilitação física." },
  { nome:"Gastroenterologia", emoji:"🫃", resumo:"Cuida do sistema digestivo, estômago, intestino, refluxo e gastrite." },
  { nome:"Ginecologia", emoji:"🌸", resumo:"Acompanha a saúde da mulher, prevenção, exames ginecológicos e orientações." },
  { nome:"Neurologia", emoji:"🧠", resumo:"Avalia dores de cabeça, tonturas, alterações neurológicas, memória e sistema nervoso." },
  { nome:"Nutricionista", emoji:"🥗", resumo:"Orienta alimentação, controle de peso, hábitos saudáveis e planos nutricionais." },
  { nome:"Obstetrícia", emoji:"🤰", resumo:"Acompanha gestantes, pré-natal, saúde materna e desenvolvimento da gravidez." },
  { nome:"Oftalmologia", emoji:"👁️", resumo:"Cuida da saúde dos olhos, visão, grau e alterações oculares." },
  { nome:"Ortopedia", emoji:"🦴", resumo:"Avalia ossos, articulações, coluna, dores, fraturas e lesões." },
  { nome:"Otorrinolaringologia", emoji:"👂", resumo:"Cuida de ouvido, nariz e garganta, sinusite, rouquidão e alterações auditivas." },
  { nome:"Pediatria", emoji:"👶", resumo:"Atendimento infantil, crescimento, prevenção e cuidados com crianças." },
  { nome:"Pneumologia", emoji:"🫁", resumo:"Cuida da saúde respiratória, pulmões, falta de ar, tosse e doenças respiratórias." },
  { nome:"Psicologia", emoji:"💬", resumo:"Acolhimento emocional, escuta profissional, desenvolvimento pessoal e saúde mental." },
  { nome:"Psiquiatria", emoji:"🧠", resumo:"Avaliação e tratamento médico de ansiedade, depressão e saúde mental." },
  { nome:"Proctologia", emoji:"🏥", resumo:"Avalia alterações intestinais, hemorroidas, dores e sangramentos." },
  { nome:"Urologia", emoji:"🚹", resumo:"Cuida do sistema urinário, próstata, rins, bexiga e saúde masculina." },
  { nome:"Vascular", emoji:"🩸", resumo:"Acompanha circulação, varizes, dores nas pernas e vasos sanguíneos." }
];

const nomesEspecialidades = especialidades.map(item => item.nome);

const convenios = {
  "Particular": { observacao:"", especialidades: nomesEspecialidades, exames: [] },

  "AMEPLAN": {
    observacao:"AMEPLAN deve ser marcado diretamente no convênio. Para este convênio, a clínica não realiza o agendamento pelo site.",
    especialidades: [],
    exames: []
  },

  "AMIL": {
    observacao:"Pedir a carteirinha. Nenhum exame é realizado.",
    especialidades:["Cardiologia","Cirurgião","Clínica Geral","Dermatologia","Endocrinologia","Gastroenterologia","Ginecologia","Neurologia","Oftalmologia","Otorrinolaringologia","Pediatria","Psiquiatria","Urologia"],
    exames:[]
  },

  "BIO VIDA": {
    observacao:"",
    especialidades:["Clínica Geral","Pediatria"],
    exames:["Sangue","Papanicolau","Eletrocardiograma","Medicação","Raio-X"]
  },

  "BLUE SAÚDE": {
    observacao:"",
    especialidades:["Cardiologia","Clínica Geral","Dermatologia","Endocrinologia","Fisioterapia","Gastroenterologia","Ginecologia","Psiquiatria","Urologia"],
    exames:["Audiometria","Ecocardiograma","Eletrocardiograma","Eletroencefalograma","Holter 24h","Infiltração","Lavagem de Ouvido","MAPA 24h","Mapeamento de Retina","Nasofibroscopia","Otoneurológico","Prova de Função Pulmonar","Raio-X","Teste Ergométrico","Ultrassonografia","Tomografia","Mamografia","Densitometria"]
  },

  "BLUEMED / ALVORECER": {
    observacao:"",
    especialidades:["Cardiologia","Cirurgião","Clínica Geral","Dermatologia","Endocrinologia","Gastroenterologia","Ginecologia","Neurologia","Ortopedia","Otorrinolaringologia","Pediatria","Urologia","Vascular"],
    exames:["Audiometria","Eletrocardiograma","Medicação","Raio-X"]
  },

  "CENTRAL NACIONAL UNIMED": {
    observacao:"",
    especialidades:["Cardiologia","Cirurgião","Clínica Geral","Dermatologia","Endocrinologia","Fisioterapia","Gastroenterologia","Ginecologia","Neurologia","Ortopedia","Oftalmologia","Otorrinolaringologia","Pediatria","Psicologia","Psiquiatria","Urologia","Vascular"],
    exames:["Eletrocardiograma","Ultrassonografia"]
  },

  "ECOCONSUMIDOR": {
    observacao:"Nenhum exame é realizado.",
    especialidades:["Cardiologia","Cirurgião","Clínica Geral","Dermatologia","Endocrinologia","Gastroenterologia","Ginecologia","Neurologia","Ortopedia","Otorrinolaringologia","Pediatria","Psiquiatria","Urologia","Vascular"],
    exames:[]
  },

  "ECONOMUS": {
    observacao:"Paciente deve trazer a guia.",
    especialidades:["Cardiologia","Dermatologia","Endocrinologia","Gastroenterologia","Ginecologia","Neurologia","Otorrinolaringologia","Pediatria","Urologia","Vascular"],
    exames:["Ecocardiograma"]
  },

  "GAMA SAÚDE / AMPLA": {
    observacao:"",
    especialidades:["Clínica Geral","Dermatologia","Ginecologia","Otorrinolaringologia","Pediatria","Vascular"],
    exames:["Sangue","Anátomo Patológico"]
  },

  "GARANTIA SAÚDE": {
    observacao:"Nenhum exame é realizado.",
    especialidades:["Cardiologia","Clínica Geral","Dermatologia","Ginecologia","Ortopedia","Otorrinolaringologia","Pediatria"],
    exames:[]
  },

  "GEAP": {
    observacao:"",
    especialidades:["Cardiologia","Cirurgião","Clínica Geral","Dermatologia","Endocrinologia","Fisioterapia","Gastroenterologia","Ginecologia","Neurologia","Ortopedia","Oftalmologia","Pediatria","Psiquiatria","Urologia","Vascular"],
    exames:["Audiometria","Ecocardiograma","Eletrocardiograma","Eletroencefalograma","Holter 24h","Lavagem de Ouvido","Prova de Função Pulmonar","Teste Ergométrico"]
  },

  "MEDSELECT": {
    observacao:"",
    especialidades:["Cardiologia","Clínica Geral","Dermatologia","Endocrinologia","Fisioterapia","Ginecologia","Neurologia","Nutricionista","Ortopedia","Oftalmologia","Otorrinolaringologia","Pediatria","Psicologia","Psiquiatria","Vascular"],
    exames:["Audiometria","Ecocardiograma","Eletrocardiograma","Eletroencefalograma","Holter 24h","MAPA 24h","Mapeamento Cerebral","Mapeamento de Retina","Nasofibroscopia","Otoneurológico","Prova de Função Pulmonar","Raio-X","Ultrassonografia","Tomografia","Densitometria Óssea","Mamografia"]
  },

  "MEDSENIOR": {
    observacao:"",
    especialidades:["Cardiologia","Dermatologia","Otorrinolaringologia"],
    exames:["Ecocardiograma","Eletrocardiograma","Ultrassonografia","Tomografia","Mamografia","Densitometria"]
  },

  "MEDSERVICE": {
    observacao:"",
    especialidades:["Alergologia","Cardiologia","Cirurgião","Clínica Geral","Dermatologia","Endocrinologia","Fisioterapia","Gastroenterologia","Ginecologia","Neurologia","Nutricionista","Ortopedia","Oftalmologia","Otorrinolaringologia","Pediatria","Psicologia","Psiquiatria","Urologia","Vascular"],
    exames:["Sangue","Audiometria","Papanicolau","Ecocardiograma","Eletrocardiograma","Eletroencefalograma","Gesso","Inalação","Lavagem de Ouvido","Mapeamento de Retina","Medicação","Prova de Função Pulmonar","Raio-X","Teste Ergométrico","Ultrassonografia","Tomografia","Densitometria","Mamografia"]
  },

  "NEW LEADER": {
    observacao:"Paciente deve trazer autorização.",
    especialidades:["Alergologia","Cardiologia","Cirurgião","Clínica Geral","Dermatologia","Fisioterapia","Gastroenterologia","Ginecologia","Neurologia","Nutricionista","Ortopedia","Oftalmologia","Otorrinolaringologia","Pediatria","Psicologia","Psiquiatria","Urologia","Vascular"],
    exames:["Audiometria","Ecocardiograma","Eletrocardiograma","Eletroencefalograma","Holter 24h","Gesso","Inalação","Lavagem de Ouvido","MAPA 24h","Otoneurológico","Prova de Função Pulmonar","Raio-X","Teste Ergométrico","Ultrassonografia"]
  },

  "OMINT": {
    observacao:"Necessário autorização.",
    especialidades:["Alergologia","Cardiologia","Clínica Geral","Dermatologia","Endocrinologia","Fisioterapia","Gastroenterologia","Ginecologia","Neurologia","Ortopedia","Oftalmologia","Otorrinolaringologia","Pediatria","Proctologia","Psicologia","Psiquiatria","Urologia","Vascular"],
    exames:["Audiometria","Ecocardiograma","Eletrocardiograma","Holter 24h","Gesso","Inalação","Infiltração","Lavagem de Ouvido","Mapeamento Cerebral","Medicação","Nasofibroscopia","Otoneurológico","Raio-X","Teste Ergométrico","Ultrassonografia"]
  },

  "PLENA SAÚDE": {
    observacao:"Nenhum exame é realizado.",
    especialidades:["Alergologia","Cardiologia","Clínica Geral","Dermatologia","Endocrinologia","Gastroenterologia","Ginecologia","Ortopedia","Oftalmologia","Otorrinolaringologia","Pediatria","Psiquiatria","Urologia","Vascular"],
    exames:[]
  },

  "PORTO ITAÚ": {
    observacao:"",
    especialidades:["Alergologia","Cardiologia","Cirurgião","Clínica Geral","Dermatologia","Endocrinologia","Fisioterapia","Gastroenterologia","Ginecologia","Neurologia","Nutricionista","Ortopedia","Oftalmologia","Otorrinolaringologia","Pediatria","Pneumologia","Psicologia","Psiquiatria","Urologia","Vascular"],
    exames:["Audiometria","Eletrocardiograma","Gesso","Lavagem de Ouvido","Mapeamento Cerebral","Mapeamento de Retina","Medicação","Nasofibroscopia","Otoneurológico","Prova de Função Pulmonar","Raio-X","Ultrassonografia"]
  },

  "PREVENT SENIOR": {
    observacao:"Nenhum exame é realizado.",
    especialidades:["Psiquiatria","Otorrinolaringologia"],
    exames:[]
  },

  "PROASA": {
    observacao:"",
    especialidades:["Cardiologia","Clínica Geral","Dermatologia","Endocrinologia","Fisioterapia","Gastroenterologia","Nutricionista","Ortopedia","Oftalmologia","Otorrinolaringologia","Pediatria","Psicologia","Psiquiatria","Urologia"],
    exames:["Audiometria","Biópsia","Ecocardiograma","Eletrocardiograma","Holter 24h","MAPA 24h","Nasofibroscopia","Otoneurológico","Prova de Função Pulmonar","Teste Ergométrico"]
  },

  "SANTA CASA DE MAUÁ": {
    observacao:"",
    especialidades:["Cardiologia","Cirurgião","Clínica Geral","Dermatologia","Gastroenterologia","Ginecologia","Neurologia","Ortopedia","Oftalmologia","Otorrinolaringologia","Pediatria","Urologia","Vascular"],
    exames:["Audiometria","Ecocardiograma","Eletrocardiograma","Mapeamento de Retina","Otoneurológico","Raio-X","Teste Ergométrico","Ultrassonografia"]
  },

  "SÃO CRISTÓVÃO": {
    observacao:"",
    especialidades:["Cardiologia","Clínica Geral","Dermatologia","Endocrinologia","Fisioterapia","Gastroenterologia","Ginecologia","Pediatria","Vascular"],
    exames:["Eletrocardiograma"]
  },

  "SÃO MIGUEL": {
    observacao:"Pegamos apenas Clínico Geral e Cardiologia.",
    especialidades:["Cardiologia","Clínica Geral"],
    exames:["Eletrocardiograma","Raio-X"]
  },

  "SEGUROS UNIMED": {
    observacao:"Nenhum exame é realizado.",
    especialidades:["Cirurgião","Clínica Geral","Dermatologia","Endocrinologia","Ginecologia","Neurologia","Nutricionista","Pediatria","Psiquiatria","Vascular"],
    exames:[]
  },

  "SISTEMAS": {
    observacao:"Paciente deve trazer a guia. Nenhum exame é realizado.",
    especialidades:["Endocrinologia","Gastroenterologia","Neurologia","Otorrinolaringologia"],
    exames:[]
  },

  "SUL AMÉRICA": {
    observacao:"",
    especialidades:["Cardiologia","Clínica Geral","Dermatologia","Endocrinologia","Ginecologia","Ortopedia","Otorrinolaringologia","Pediatria","Psicologia","Psiquiatria","Vascular"],
    exames:["Sangue","Papanicolau","Eletrocardiograma","Holter 24h","Gesso","Inalação","MAPA 24h","Mapeamento de Retina","Medicação","Prova de Função Pulmonar","Teste Ergométrico"]
  },

  "TEMPO ASSIST": {
    observacao:"Paciente deve trazer autorização. Nenhum exame é realizado.",
    especialidades:["Cardiologia","Cirurgião","Clínica Geral","Dermatologia","Endocrinologia","Gastroenterologia","Ginecologia","Ortopedia","Oftalmologia","Otorrinolaringologia","Pediatria","Urologia","Vascular"],
    exames:[]
  },

  "TOTAL MEDCARE": {
    observacao:"",
    especialidades:["Cardiologia","Clínica Geral","Dermatologia","Endocrinologia","Fisioterapia","Gastroenterologia","Neurologia","Nutricionista","Ortopedia","Oftalmologia","Otorrinolaringologia","Urologia"],
    exames:["Eletrocardiograma","Eletroencefalograma","MAPA 24h","Otoneurológico","Raio-X","Teste Ergométrico","Ultrassonografia","Tomografia"]
  },

  "UBB": {
    observacao:"Consulta R$90. Nutrição e Psicologia R$50. Nenhum exame é realizado.",
    especialidades:["Cardiologia","Clínica Geral","Dermatologia","Endocrinologia","Ginecologia","Nutricionista","Otorrinolaringologia","Pediatria","Psicologia"],
    exames:[]
  },

  "UNIHOSP": {
    observacao:"",
    especialidades:["Clínica Geral","Pediatria"],
    exames:["Sangue","Papanicolau","Eletrocardiograma","Inalação","Medicação","Raio-X"]
  },

  "VIVEST": {
    observacao:"",
    especialidades:["Cardiologia","Clínica Geral","Dermatologia","Fisioterapia","Gastroenterologia","Ginecologia","Ortopedia","Oftalmologia","Otorrinolaringologia","Pediatria","Urologia","Vascular"],
    exames:["Eletrocardiograma","Inalação","Lavagem de Ouvido","Medicação","Ultrassonografia"]
  }
};

const listaEspecialidades = document.getElementById("listaEspecialidades");
const buscaEspecialidade = document.getElementById("buscarEspecialidade");

const convenioSelect = document.getElementById("convenio");
const especialidadeSelect = document.getElementById("especialidade");

const consultaConvenio = document.getElementById("consultaConvenio");
const resultadoEspecialidades = document.getElementById("resultadoEspecialidades");
const resultadoExames = document.getElementById("resultadoExames");
const resultadoObservacao = document.getElementById("resultadoObservacao");
const avisoConvenio = document.getElementById("avisoConvenio");

function renderizarEspecialidades(lista) {
  if (!listaEspecialidades) return;

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
  const nomesOrdenados = Object.keys(convenios).sort((a, b) =>
    a.localeCompare(b, "pt-BR")
  );

  nomesOrdenados.forEach(nome => {
    if (convenioSelect) {
      const option = document.createElement("option");
      option.value = nome;
      option.textContent = nome;
      convenioSelect.appendChild(option);
    }

    if (consultaConvenio) {
      const option2 = document.createElement("option");
      option2.value = nome;
      option2.textContent = nome;
      consultaConvenio.appendChild(option2);
    }
  });
}

function atualizarEspecialidadesAgendamento() {
  if (!convenioSelect || !especialidadeSelect) return;

  const convenioAtual = convenioSelect.value;
  const dados = convenios[convenioAtual];

  if (!dados) return;

  especialidadeSelect.innerHTML = "";

  if (dados.especialidades.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Agendamento não disponível pelo site";
    especialidadeSelect.appendChild(option);
    especialidadeSelect.disabled = true;

    if (avisoConvenio) {
      avisoConvenio.style.display = "block";
      avisoConvenio.textContent = dados.observacao;
    }

    return;
  }

  especialidadeSelect.disabled = false;

  dados.especialidades.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    especialidadeSelect.appendChild(option);
  });

  if (avisoConvenio) {
    if (dados.observacao) {
      avisoConvenio.style.display = "block";
      avisoConvenio.textContent = dados.observacao;
    } else {
      avisoConvenio.style.display = "none";
      avisoConvenio.textContent = "";
    }
  }
}

function atualizarConsultaConvenio() {
  if (!consultaConvenio || !resultadoEspecialidades || !resultadoExames) return;

  const convenioAtual = consultaConvenio.value;
  const dados = convenios[convenioAtual];

  if (!dados) return;

  resultadoEspecialidades.innerHTML = "";
  resultadoExames.innerHTML = "";

  if (dados.especialidades.length > 0) {
    dados.especialidades.forEach(item => {
      const chip = document.createElement("span");
      chip.classList.add("chip");
      chip.textContent = item;
      resultadoEspecialidades.appendChild(chip);
    });
  } else {
    const chip = document.createElement("span");
    chip.classList.add("chip", "vazio");
    chip.textContent = "Agendamento direto pelo convênio";
    resultadoEspecialidades.appendChild(chip);
  }

  if (dados.exames.length > 0) {
    dados.exames.forEach(item => {
      const chip = document.createElement("span");
      chip.classList.add("chip", "exame");
      chip.textContent = item;
      resultadoExames.appendChild(chip);
    });
  } else {
    const chip = document.createElement("span");
    chip.classList.add("chip", "vazio");
    chip.textContent = "Nenhum exame disponível";
    resultadoExames.appendChild(chip);
  }

  if (resultadoObservacao) {
    if (dados.observacao) {
      resultadoObservacao.style.display = "block";
      resultadoObservacao.textContent = dados.observacao;
    } else {
      resultadoObservacao.style.display = "none";
      resultadoObservacao.textContent = "";
    }
  }
}

if (buscaEspecialidade) {
  buscaEspecialidade.addEventListener("input", () => {
    const termo = buscaEspecialidade.value.toLowerCase();

    const filtrado = especialidades.filter(item =>
      item.nome.toLowerCase().includes(termo)
    );

    renderizarEspecialidades(filtrado);
  });
}

if (convenioSelect) {
  convenioSelect.addEventListener("change", atualizarEspecialidadesAgendamento);
}

if (consultaConvenio) {
  consultaConvenio.addEventListener("change", atualizarConsultaConvenio);
}

const form = document.getElementById("formAgendamento");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (especialidadeSelect.disabled) {
      alert("Este convênio deve ser marcado diretamente no convênio.");
      return;
    }

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const data = document.getElementById("data").value;
    const convenio = convenioSelect.value;
    const especialidade = especialidadeSelect.value;
    const observacao = document.getElementById("observacao").value;

    const mensagem = `
Olá! Gostaria de solicitar um agendamento.

👤 Nome: ${nome}
📞 Telefone: ${telefone}
📅 Data desejada: ${data}

🤝 Convênio: ${convenio}
🩺 Especialidade: ${especialidade}

📝 Observações:
${observacao || "Nenhuma"}
`;

    const numero = "5511959701266";
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
  });
}

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    mobileMenuBtn.textContent = mobileNav.classList.contains("active") ? "×" : "☰";
  });

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      mobileMenuBtn.textContent = "☰";
    });
  });
}

renderizarEspecialidades(especialidades);
preencherConvenios();

if (convenioSelect) atualizarEspecialidadesAgendamento();
if (consultaConvenio) atualizarConsultaConvenio();