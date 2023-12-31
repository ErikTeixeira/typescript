import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    // private negociacoes: Array<Negociacao> = [];

    // SIMPLIFICAR O CODIGO EM TS
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // ReadonlyArray<Negociacao> -> forma sem simplificar
    lista(): readonly Negociacao[] {
        // sem o ReadonlyArray - para não excluir da lista principal -- coloca cada item da lista em uma nova lista
        // return [...this.negociacoes];
        return this.negociacoes;
    }
}