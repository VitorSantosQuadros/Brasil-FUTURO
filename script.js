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
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
