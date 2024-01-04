import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
    // Se colocar tipo any - inputData:any - perde o autocomplete do TS
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    // construtor não tipa
    constructor () {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    // colocar o tipo de retorno
    adiciona(): void {
        const negociacao = this.criaNegociacao();

        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        // expressão regular - vai pegar todos os '-'
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));

        const quantidade = parseInt(this.inputQuantidade.value);

        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }
}