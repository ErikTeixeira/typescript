import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    private negociacoesView = new NegociacoesView("#negociacoesView", true);
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        // para não gastar tanto tempo tratando algo se for null se não encontrar o id no DOM, coloca "as HTMLInputElement" OU "<HTMLInputElement>" que garante que vai ser este tipo

        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if( !this.ehDiaUtil(negociacao.data) ) {
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
            return;
        }
        
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();

        // em vez de ter que llembrar de sempre chamar o update para atualizar a view da página - cria um método que sempre chama o update, pórem não é muito bom para performance
        // this.negociacoesView.update(this.negociacoes);
        // this.mensagemView.update("Negociação adicionada com sucesso");
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso");
    }
}
