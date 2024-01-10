import { Modelo } from "../interfaces/modelo.js";

// possivel impementar mais de uma interface        -----------
export class Negociacao implements Modelo<Negociacao> {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {
        // QUANDO FOR - EXTENDS
        // garantir a chamada o construtor pai
        // se não chamar vai estar sobrescrevendo este construtor
        // super();
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    // é obrigatorio por causa da classe abstrata
    public paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }

    // Evitar importar negociações duplicadas
    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate() 
        && this.data.getMonth() === negociacao.data.getMonth() 
        && this.data.getFullYear() === negociacao.data.getFullYear();
    }
    
}