// Armazena as histórias e finais
const storyNodes = {
    start: {
        text: "Você está a bordo de uma nave perdida no espaço. Dois sistemas de navegação estão disponíveis.",
        choices: [
            { text: "Usar o sistema de navegação principal", next: "mainNav" },
            { text: "Usar o sistema de navegação de emergência", next: "emergencyNav" }
        ]
    },
    mainNav: {
        text: "O sistema principal falha, mas você detecta uma estação espacial abandonada nas proximidades.",
        choices: [
            { text: "Explorar a estação espacial", next: "exploreStation" },
            { text: "Tentar consertar o sistema", next: "fixSystem" }
        ]
    },
    emergencyNav: {
        text: "O sistema de emergência o leva a um planeta inexplorado com recursos limitados.",
        choices: [
            { text: "Pousar no planeta", next: "landPlanet" },
            { text: "Buscar outra rota", next: "searchRoute" }
        ]
    },
    exploreStation: {
        text: "Na estação, você encontra um portal de teletransporte.",
        choices: [
            { text: "Usar o portal", next: "ending1" },
            { text: "Voltar para a nave", next: "ending2" }
        ]
    },
    fixSystem: {
        text: "Você conserta o sistema e recebe coordenadas para uma rota segura.",
        choices: [
            { text: "Seguir as coordenadas", next: "ending3" },
            { text: "Explorar a área primeiro", next: "ending4" }
        ]
    },
    landPlanet: {
        text: "Ao pousar, você encontra uma civilização alienígena amigável.",
        choices: [
            { text: "Pedir ajuda para voltar à Terra", next: "ending5" },
            { text: "Explorar o planeta", next: "ending6" }
        ]
    },
    searchRoute: {
        text: "Você encontra uma frota de resgate nas proximidades.",
        choices: [
            { text: "Solicitar ajuda à frota", next: "ending7" },
            { text: "Seguir em uma rota solo", next: "ending8" }
        ]
    },
    ending1: { text: "Você usa o portal e é transportado de volta à Terra em segurança!" },
    ending2: { text: "Você volta para a nave, mas fica preso no espaço sem rota para a Terra." },
    ending3: { text: "Seguindo as coordenadas, você retorna à Terra como herói espacial!" },
    ending4: { text: "Explorando, você descobre uma área perigosa e perde sua nave..." },
    ending5: { text: "Os alienígenas ajudam você a voltar à Terra com tecnologia avançada!" },
    ending6: { text: "Você explora o planeta e se torna parte da civilização alienígena." },
    ending7: { text: "A frota de resgate leva você de volta à Terra em segurança!" },
    ending8: { text: "Você tenta uma rota solo e nunca mais é encontrado..." }
};

// Inicializa o jogo
function startGame() {
    showNode("start");
}

// Mostra o texto e as escolhas
function showNode(nodeKey) {
    const node = storyNodes[nodeKey];
    document.getElementById("story").innerText = node.text;

    const choice1 = document.getElementById("choice1");
    const choice2 = document.getElementById("choice2");

    if (node.choices) {
        choice1.innerText = node.choices[0].text;
        choice1.onclick = () => makeChoice(node.choices[0].next);
        choice1.style.display = "inline-block";

        choice2.innerText = node.choices[1].text;
        choice2.onclick = () => makeChoice(node.choices[1].next);
        choice2.style.display = "inline-block";
    } else {
        choice1.style.display = "none";
        choice2.style.display = "none";
    }
}

// Faz a escolha do usuário
function makeChoice(nextNode) {
    if (storyNodes[nextNode]) {
        showNode(nextNode);
    }
}

// Inicia o jogo ao carregar a página
window.onload = startGame;