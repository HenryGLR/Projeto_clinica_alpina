"use strict";

const WHATSAPP_CLINICA = "5511959701266";

const especialidades = [
  "Acupuntura",
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
  "Obstetrícia",
  "Oftalmologia",
  "Ortopedia",
  "Otorrinolaringologia",
  "Pediatria",
  "Pneumologia",
  "Psicologia",
  "Psiquiatria",
  "Proctologia",
  "Urologia",
  "Vascular"
];

const convenios = {
  "Particular": {
    observacao: "",
    especialidades: especialidades,
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
      "Ultrassonografia"
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

const formAgendamento = document.getElementById("formAgendamento");
const nomeInput = document.getElementById("nome");
const telefoneInput = document.getElementById("telefone");
const dataInput = document.getElementById("data");
const convenioSelect = document.getElementById("convenio");
const carteirinhaBox = document.getElementById("carteirinhaBox");
const carteirinhaInput = document.getElementById("carteirinha");
const especialidadeSelect = document.getElementById("especialidade");
const observacaoInput = document.getElementById("observacao");
const avisoConvenio = document.getElementById("avisoConvenio");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

function criarOpcao(valor, texto = valor) {
  const opcao = document.createElement("option");

  opcao.value = valor;
  opcao.textContent = texto;

  return opcao;
}

function ordenarConvenios() {
  const nomes = Object.keys(convenios)
    .filter(nome => nome !== "Particular")
    .sort((a, b) => a.localeCompare(b, "pt-BR"));

  return ["Particular", ...nomes];
}

function preencherConvenios() {
  if (!convenioSelect) return;

  convenioSelect.innerHTML = "";

  const opcaoInicial = criarOpcao("", "Selecione o convênio");
  opcaoInicial.disabled = true;
  opcaoInicial.selected = true;

  convenioSelect.appendChild(opcaoInicial);

  ordenarConvenios().forEach(nome => {
    convenioSelect.appendChild(criarOpcao(nome));
  });
}

function preencherEspecialidades(lista = []) {
  if (!especialidadeSelect) return;

  especialidadeSelect.innerHTML = "";

  if (!lista.length) {
    const opcao = criarOpcao("", "Agendamento indisponível pelo site");
    opcao.disabled = true;
    opcao.selected = true;

    especialidadeSelect.appendChild(opcao);
    especialidadeSelect.disabled = true;

    return;
  }

  const opcaoInicial = criarOpcao("", "Selecione a especialidade");
  opcaoInicial.disabled = true;
  opcaoInicial.selected = true;

  especialidadeSelect.appendChild(opcaoInicial);

  lista.forEach(especialidade => {
    especialidadeSelect.appendChild(
      criarOpcao(especialidade)
    );
  });

  especialidadeSelect.disabled = false;
}

function mostrarAviso(mensagem = "") {
  if (!avisoConvenio) return;

  if (mensagem) {
    avisoConvenio.textContent = mensagem;
    avisoConvenio.style.display = "block";
    return;
  }

  avisoConvenio.textContent = "";
  avisoConvenio.style.display = "none";
}

function atualizarCarteirinha(convenioSelecionado, dadosConvenio) {
  if (!carteirinhaBox || !carteirinhaInput) return;

  const particular = convenioSelecionado === "Particular";
  const indisponivel =
    !dadosConvenio ||
    dadosConvenio.especialidades.length === 0;

  if (particular || indisponivel || !convenioSelecionado) {
    carteirinhaBox.style.display = "none";
    carteirinhaInput.required = false;
    carteirinhaInput.disabled = true;
    carteirinhaInput.value = "";

    return;
  }

  carteirinhaBox.style.display = "block";
  carteirinhaInput.required = true;
  carteirinhaInput.disabled = false;
}

function atualizarConvenio() {
  if (!convenioSelect) return;

  const convenioSelecionado = convenioSelect.value;
  const dadosConvenio = convenios[convenioSelecionado];

  if (!dadosConvenio) {
    preencherEspecialidades([]);
    atualizarCarteirinha("", null);
    mostrarAviso("");
    return;
  }

  preencherEspecialidades(dadosConvenio.especialidades);
  atualizarCarteirinha(convenioSelecionado, dadosConvenio);
  mostrarAviso(dadosConvenio.observacao);
}

function aplicarMascaraTelefone(evento) {
  const input = evento.target;
  const numeros = input.value.replace(/\D/g, "").slice(0, 11);

  if (numeros.length <= 2) {
    input.value = numeros;
    return;
  }

  if (numeros.length <= 6) {
    input.value =
      `(${numeros.slice(0, 2)}) ` +
      numeros.slice(2);

    return;
  }

  if (numeros.length <= 10) {
    input.value =
      `(${numeros.slice(0, 2)}) ` +
      `${numeros.slice(2, 6)}-${numeros.slice(6)}`;

    return;
  }

  input.value =
    `(${numeros.slice(0, 2)}) ` +
    `${numeros.slice(2, 7)}-${numeros.slice(7)}`;
}

function configurarDataMinima() {
  if (!dataInput) return;

  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");

  dataInput.min = `${ano}-${mes}-${dia}`;
}

function formatarData(data) {
  if (!data) return "";

  const partes = data.split("-");

  if (partes.length !== 3) return data;

  const [ano, mes, dia] = partes;

  return `${dia}/${mes}/${ano}`;
}

function normalizarTexto(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function encontrarConvenio(nome) {
  const nomeNormalizado = normalizarTexto(nome);

  return Object.keys(convenios).find(
    convenio =>
      normalizarTexto(convenio) === nomeNormalizado
  );
}

function encontrarEspecialidade(nome, lista) {
  const nomeNormalizado = normalizarTexto(nome);

  return lista.find(
    especialidade =>
      normalizarTexto(especialidade) === nomeNormalizado
  );
}

function aplicarParametrosDaURL() {
  if (!convenioSelect || !especialidadeSelect) return;

  const parametros = new URLSearchParams(window.location.search);

  const convenioRecebido = parametros.get("convenio");
  const especialidadeRecebida = parametros.get("especialidade");

  let convenioSelecionado = "";

  if (convenioRecebido) {
    convenioSelecionado = encontrarConvenio(convenioRecebido) || "";
  }

  if (!convenioSelecionado && especialidadeRecebida) {
    convenioSelecionado = "Particular";
  }

  if (convenioSelecionado) {
    convenioSelect.value = convenioSelecionado;
    atualizarConvenio();
  }

  if (especialidadeRecebida && convenioSelecionado) {
    const dadosConvenio = convenios[convenioSelecionado];

    const especialidadeEncontrada = encontrarEspecialidade(
      especialidadeRecebida,
      dadosConvenio.especialidades
    );

    if (especialidadeEncontrada) {
      especialidadeSelect.value = especialidadeEncontrada;
    }
  }
}

function validarFormulario() {
  const nome = nomeInput?.value.trim() || "";
  const telefone = telefoneInput?.value.trim() || "";
  const data = dataInput?.value || "";
  const convenio = convenioSelect?.value || "";
  const especialidade = especialidadeSelect?.value || "";
  const carteirinha = carteirinhaInput?.value.trim() || "";

  if (!nome) {
    alert("Por favor, informe o nome completo do paciente.");
    nomeInput?.focus();
    return false;
  }

  if (!telefone) {
    alert("Por favor, informe um telefone para contato.");
    telefoneInput?.focus();
    return false;
  }

  const telefoneNumeros = telefone.replace(/\D/g, "");

  if (telefoneNumeros.length < 10) {
    alert("Por favor, informe um telefone válido com DDD.");
    telefoneInput?.focus();
    return false;
  }

  if (!data) {
    alert("Por favor, selecione a data desejada.");
    dataInput?.focus();
    return false;
  }

  if (!convenio) {
    alert("Por favor, selecione o convênio.");
    convenioSelect?.focus();
    return false;
  }

  const dadosConvenio = convenios[convenio];

  if (
    !dadosConvenio ||
    dadosConvenio.especialidades.length === 0
  ) {
    alert(
      dadosConvenio?.observacao ||
      "O agendamento deste convênio não está disponível pelo site."
    );

    convenioSelect?.focus();
    return false;
  }

  if (convenio !== "Particular" && !carteirinha) {
    alert("Por favor, informe o número da carteirinha.");
    carteirinhaInput?.focus();
    return false;
  }

  if (!especialidade) {
    alert("Por favor, selecione uma especialidade.");
    especialidadeSelect?.focus();
    return false;
  }

  return true;
}

function montarMensagemAgendamento() {
  const nome = nomeInput.value.trim();
  const telefone = telefoneInput.value.trim();
  const data = dataInput.value;
  const convenio = convenioSelect.value;
  const especialidade = especialidadeSelect.value;
  const observacao = observacaoInput?.value.trim() || "";
  const carteirinha =
    convenio === "Particular"
      ? "Não se aplica"
      : carteirinhaInput.value.trim();

  return [
    "Olá! Gostaria de solicitar um agendamento na Clínica Médica Vila Alpina.",
    "",
    `Nome do paciente: ${nome}`,
    `Telefone: ${telefone}`,
    `Data desejada: ${formatarData(data)}`,
    `Convênio: ${convenio}`,
    `Número da carteirinha: ${carteirinha}`,
    `Especialidade: ${especialidade}`,
    "",
    `Observações: ${observacao || "Nenhuma observação informada."}`,
    "",
    "Aguardo a confirmação da recepção. Obrigado!"
  ].join("\n");
}

function enviarAgendamento(evento) {
  evento.preventDefault();

  if (!validarFormulario()) return;

  const mensagem = montarMensagemAgendamento();

  const linkWhatsApp =
    `https://wa.me/${WHATSAPP_CLINICA}` +
    `?text=${encodeURIComponent(mensagem)}`;

  window.open(
    linkWhatsApp,
    "_blank",
    "noopener,noreferrer"
  );
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
  convenioSelect?.addEventListener(
    "change",
    atualizarConvenio
  );

  telefoneInput?.addEventListener(
    "input",
    aplicarMascaraTelefone
  );

  formAgendamento?.addEventListener(
    "submit",
    enviarAgendamento
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
}

function inicializarAgendamento() {
  preencherConvenios();
  preencherEspecialidades([]);
  configurarDataMinima();
  adicionarEventos();
  aplicarParametrosDaURL();
}

document.addEventListener(
  "DOMContentLoaded",
  inicializarAgendamento
);