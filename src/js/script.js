const especialidades = [
    {
        nome: "Acupuntura",
        icone: "🪷",
        descricao: "Tratamento complementar para dores, ansiedade, estresse e equilíbrio corporal."
    },
    {
        nome: "Alergologia",
        icone: "🤧",
        descricao: "Avaliação e tratamento de alergias respiratórias, alimentares e de pele."
    },
    {
        nome: "Cardiologia",
        icone: "❤️",
        descricao: "Cuida da saúde do coração, pressão arterial, arritmias e prevenção cardiovascular."
    },
    {
        nome: "Clínica Geral",
        icone: "🩺",
        descricao: "Atendimento inicial, avaliação geral, check-ups e encaminhamento para especialistas."
    },
    {
        nome: "Dermatologia",
        icone: "🧴",
        descricao: "Cuida da pele, acne, manchas, alergias, queda de cabelo, unhas e sinais."
    },
    {
        nome: "Endocrinologia",
        icone: "⚖️",
        descricao: "Avalia hormônios, diabetes, tireoide, metabolismo, obesidade e alterações hormonais."
    },
    {
        nome: "Gastroenterologia",
        icone: "🫃",
        descricao: "Cuida do estômago, intestino, fígado, refluxo, gastrite e digestão."
    },
    {
        nome: "Ginecologia",
        icone: "🌸",
        descricao: "Saúde da mulher, prevenção, exames de rotina, ciclo menstrual e acompanhamento ginecológico."
    },
    {
        nome: "Neurologia",
        icone: "🧠",
        descricao: "Avalia dores de cabeça, tonturas, memória, nervos, convulsões e sistema nervoso."
    },
    {
        nome: "Nutricionista",
        icone: "🥗",
        descricao: "Orientação alimentar para saúde, emagrecimento, ganho de massa e qualidade de vida."
    },
    {
        nome: "Obstetrícia",
        icone: "🤰",
        descricao: "Acompanhamento da gestação, pré-natal e cuidados com a saúde da gestante."
    },
    {
        nome: "Oftalmologia",
        icone: "👁️",
        descricao: "Cuida da visão, grau dos óculos, irritações, pressão ocular e doenças dos olhos."
    },
    {
        nome: "Ortopedia",
        icone: "🦴",
        descricao: "Tratamento de dores, lesões, fraturas, coluna, joelhos, ombros e articulações."
    },
    {
        nome: "Otorrinolaringologia",
        icone: "👂",
        descricao: "Cuida de ouvido, nariz e garganta, sinusite, rinite, tontura e audição."
    },
    {
        nome: "Pediatria",
        icone: "👶",
        descricao: "Atendimento infantil, crescimento, desenvolvimento, vacinas e saúde da criança."
    },
    {
        nome: "Psicologia",
        icone: "💬",
        descricao: "Apoio emocional, ansiedade, autoestima, relacionamentos e saúde mental."
    },
    {
        nome: "Psiquiatria",
        icone: "🧩",
        descricao: "Avaliação e tratamento de transtornos emocionais, ansiedade, depressão e sono."
    },
    {
        nome: "Proctologia",
        icone: "🩻",
        descricao: "Cuida de alterações intestinais, hemorroidas, fissuras e saúde do reto e ânus."
    },
    {
        nome: "Urologia",
        icone: "🚹",
        descricao: "Saúde urinária e masculina, próstata, rins, bexiga e alterações urológicas."
    },
    {
        nome: "Vascular",
        icone: "🩸",
        descricao: "Avalia circulação, varizes, inchaços, dores nas pernas e saúde dos vasos."
    }
];

const nomesEspecialidades = especialidades.map(item => item.nome);

const convenios = {
    "Particular": nomesEspecialidades,

    "Bio Vida": [
        "Clínica Geral",
        "Pediatria"
    ],

    "Amil": [
        "Cardiologia",
        "Clínica Geral",
        "Ortopedia",
        "Pediatria",
        "Ginecologia"
    ],

    "Bradesco Saúde": [
        "Cardiologia",
        "Dermatologia",
        "Clínica Geral",
        "Ortopedia",
        "Ginecologia"
    ],

    "SulAmérica": [
        "Clínica Geral",
        "Cardiologia",
        "Pediatria",
        "Oftalmologia",
        "Vascular"
    ]
};

const medicos = {
    "Acupuntura": ["Equipe Acupuntura"],
    "Alergologia": ["Equipe Alergologia"],
    "Cardiologia": ["Equipe Cardiologia"],
    "Clínica Geral": ["Equipe Clínica Vila Alpina"],
    "Dermatologia": ["Equipe Dermatologia"],
    "Endocrinologia": ["Equipe Endocrinologia"],
    "Gastroenterologia": ["Equipe Gastroenterologia"],
    "Ginecologia": ["Equipe Ginecologia"],
    "Neurologia": ["Equipe Neurologia"],
    "Nutricionista": ["Equipe Nutrição"],
    "Obstetrícia": ["Equipe Obstetrícia"],
    "Oftalmologia": ["Equipe Oftalmologia"],
    "Ortopedia": ["Equipe Ortopedia"],
    "Otorrinolaringologia": ["Equipe Otorrinolaringologia"],
    "Pediatria": ["Equipe Pediatria"],
    "Psicologia": ["Equipe Psicologia"],
    "Psiquiatria": ["Equipe Psiquiatria"],
    "Proctologia": ["Equipe Proctologia"],
    "Urologia": ["Equipe Urologia"],
    "Vascular": ["Equipe Vascular"]
};

const listaEspecialidades = document.getElementById("listaEspecialidades");
const buscaEspecialidade = document.getElementById("buscarEspecialidade");

const convenioSelect = document.getElementById("convenio");
const especialidadeSelect = document.getElementById("especialidade");
const medicoSelect = document.getElementById("medico");

function renderizarEspecialidades(lista) {
    listaEspecialidades.innerHTML = "";

    lista.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-icon">${item.icone}</div>

            <h3>${item.nome}</h3>

            <p>${item.descricao}</p>

            <a href="#agendamento" class="card-link">
                Agendar consulta
            </a>
        `;

        listaEspecialidades.appendChild(card);
    });
}

renderizarEspecialidades(especialidades);

buscaEspecialidade.addEventListener("input", () => {
    const termo = buscaEspecialidade.value.toLowerCase().trim();

    const resultado = especialidades.filter(item =>
        item.nome.toLowerCase().includes(termo) ||
        item.descricao.toLowerCase().includes(termo)
    );

    renderizarEspecialidades(resultado);
});

function carregarConvenios() {
    convenioSelect.innerHTML = "";

    Object.keys(convenios).forEach(convenio => {
        const option = document.createElement("option");

        option.value = convenio;
        option.textContent = convenio;

        convenioSelect.appendChild(option);
    });
}

function atualizarEspecialidades() {
    especialidadeSelect.innerHTML = "";

    const convenioSelecionado = convenioSelect.value;
    const lista = convenios[convenioSelecionado] || nomesEspecialidades;

    lista.forEach(especialidade => {
        const option = document.createElement("option");

        option.value = especialidade;
        option.textContent = especialidade;

        especialidadeSelect.appendChild(option);
    });

    atualizarMedicos();
}

function atualizarMedicos() {
    medicoSelect.innerHTML = "";

    const especialidadeAtual = especialidadeSelect.value;

    const listaMedicos = medicos[especialidadeAtual] || [
        "Equipe Clínica Vila Alpina"
    ];

    listaMedicos.forEach(medico => {
        const option = document.createElement("option");

        option.value = medico;
        option.textContent = medico;

        medicoSelect.appendChild(option);
    });
}

carregarConvenios();
atualizarEspecialidades();

convenioSelect.addEventListener("change", atualizarEspecialidades);
especialidadeSelect.addEventListener("change", atualizarMedicos);

document
    .getElementById("formAgendamento")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const data = document.getElementById("data").value;
        const convenio = convenioSelect.value;
        const especialidade = especialidadeSelect.value;
        const medico = medicoSelect.value;
        const observacao = document.getElementById("observacao").value.trim();

        const mensagem =
`Olá, gostaria de solicitar um agendamento na Clínica Médica Vila Alpina.

Nome: ${nome}
Telefone: ${telefone}
Data desejada: ${data}
Convênio: ${convenio}
Especialidade: ${especialidade}
Médico / Equipe: ${medico}

Observações:
${observacao || "Nenhuma observação informada."}

Aguardo retorno da recepção.
Obrigado.`;

        const numero = "5511959701266";

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");
    });

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
    } else {
        header.style.boxShadow = "none";
    }
});