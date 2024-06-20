const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com a corrupção presente no nosso país. Qual a sua primeira impressão?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo dessa realidade. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como se juntava aos corruptos safados."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta corrupção desemfreada, chamada politica, no fim vem um pensamento na sua mente que talvez pudessemos reverter essa situação. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Começa a pesquisar mais sobre o assunto, e busca conhecer pessoas boas com ideias incriveis sobre isso.",
                afirmacao: "Conseguiu utilizar a internet e o network para buscar informações úteis."
            },
            {
                texto: "Preferiu a continuar a viver a sua vida como se nada estivesse acontecendo.",
                afirmacao: "Sentiu mais facilidade em continuar na sua ignorância kkkkkkkkk."
            }
        ]
    },
    {
        enunciado: "Após o conhecimento adquirido por meio de pesquisas, você começa a ser conhecido pela população brasileira. Com essa noticia, como você se sente?",
        alternativas: [
            {
                texto: "Fico empolgado por meu trabalho esta sendo reconhecido pelas pessoas.",
                afirmacao: "Com bastante gente gostando dos meus conhecimentos que adquiri, isso vem me motivando ainda mais."
            },
            {
                texto: "Fico timido de que a maioria da população sabe o que eu estou fazendo.",
                afirmacao: "Mesmo sua preocupação com as pessoas de saberem do seu trabalho você encontra força para continuar."
            }
        ]
    },
    {
        enunciado: "Ao final de todos os estudos e popularidade que você adquiriu, você acaba se tornando presidente do Brasil. E agora?",
        alternativas: [
            {
                texto: "Com uma estratégia bem elaborada você faz as melhores escolhas possiveis, e o Brasil acaba finalmente se tornando uma potencia mundial.",
                afirmacao: "A população te ama, e você se sente realizado por ter ajudado tantas pessoas de uma só vez."
            },
            {
                texto: "Com o poder que você ganhou, você começa a se corromper e acaba tornando o Brasil uma potencia mundial, mas também uma monarquia.",
                afirmacao: "A população se sente traida e agradecida ao mesmo tempo, e você ganha tanto poder mas se sente tão triste e deprimido por ter no fundo traido o povo."
            }
        ]
    },
    {
        enunciado: "Do nada explode uma Terceira Guerra Mundial. O que você faz? ",
        alternativas: [
            {
                texto: "Eu entro na guerra e faço aliança com Israel e Alemanha para lutar contra a Arabia, China e Russia.",
                afirmacao: "Felismente ganhamos a guerra ."
            },
            {
                texto: "Eu fico neutro e ameaço com a minha bomba atômica todos os que tentarem atacar o Brasil.",
                afirmacao: "Infelismente o Japão atacou nos e tiveram que conhecer a nova Hiroshima e Nagazaki."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
