// trabalhando em sistemas de modulos do ECMAScript
// todo arquivo js se chama modulo

// import { Negociacao } from './models/negociacao.js';

// typescript vai ajudar a achar o erro antes de rodar o codigo
// Se tiver 2 argumentos apenas da erro - Expected 3 arguments, but got 2.ts(2554)      negociacao.ts(7, 35): An argument for 'valor' was not provided.

// ---------- NAVEGADOR NÃO INTENDE O TYPESCRIPT
// TS é feito na pasta APP e depois é compilado para ser JS na pasta dist
// Tem que criar e configurar o compilador  - tsconfig.json
// Colocar no package.json - "compile": "tsc"
// Rodar o compilador   - npm run compile
// Deixar rodar automatico - no package.json - "watch": "tsc -w" - npm run watch
// o npm run start deste projeto roda o watch e o server juntos

// const negociacao = new Negociacao(new Date(), 10, 100);


// consegue criar dinamicamente uma nova propriedade ->    negociacao.novovalor = 10       - vai ser adicionado na classe


// -----------------------------------
import { NegociacaoController } from "./controllers/negociacao-controller.js";


const controller = new NegociacaoController();
const form = document.querySelector(".form");

form.addEventListener("submit", event => {
    // ja sabe que e um event o ts
    event.preventDefault();    // para a página não recarregar
    controller.adiciona();
})