const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
{
    enunciado: "quantas estações tem no ano?",
    alternativas: ["4 estações", "3 estações", "5 estações"]
},
{
    enunciado: "quantos meses dura uma estação?",
    alternativas: ["3 meses", "1 mês", "6 meses"]
},
{
    enunciado: "Qual é o movimento da Terra responsável pelas estações do ano?",
    alternativas: ["Rotação", "Translação", "Nutação"]
},
{
    enunciado: "Pergunta 4",
    alternativas: ["alternativa1", "alternativa2", "alternativa3"]
},


];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPergunta.textContent = perguntaAtual.enunciado;

}

mostraPergunta();


