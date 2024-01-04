export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = [];
        // SIMPLIFICAR O CODIGO EM TS
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray<Negociacao> -> forma sem simplificar
    lista() {
        // sem o ReadonlyArray - para não excluir da lista principal -- coloca cada item da lista em uma nova lista
        // return [...this.negociacoes];
        return this.negociacoes;
    }
}
