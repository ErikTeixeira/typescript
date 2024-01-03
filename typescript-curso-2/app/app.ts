import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');

// reconhece que está em if testando se e null e para de reclamar
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error("Não foi possível inicializar a aplicação. Verifique se o form existe")
}