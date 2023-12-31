import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        // sem o ReadonlyArray - para não excluir da lista principal -- coloca cada item da lista em uma nova lista
        // return [...this.negociacoes];
        return this.negociacoes;
    }
}