export class Negociacao {
    // privados - JS - novo - #data  |  antigo - _data
    // no TS -  private _data
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    // constructor(data: Date, quantidade: number, valor: number) {
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }
    // SIMPLIFICAR O CODIGO EM TS
    // Declara as propriedades automaticamente com os mesmos nomes - so colocar private ou public
    // constructor(
    //     private _data: Date,
    //     private _quantidade: number,
    //     private _valor: number
    // ) {}
    // // get and set
    // get data(): Date{
    //     return this._data;
    // }
    // get quantidade(): number{
    //     return this._quantidade;
    // }
    // get valor(): number{
    //     return this._valor;
    // }
    // get volume(): number{
    //     return this._quantidade * this._valor;
    // }
    // Simplificar mais - como só usa o get para fazer a leitura dos dados, então deixa public e readonly
    // READONLY-->  possui um erro no qual os métodos ainda funcionam nele - negociacao.data.setDate(10); - muda a data
    // GET --> tem esse erro do date tmb
    // readonly - só não deixa atribuir - negociacao.data = new Date()
    constructor(
    // public readonly data: Date,
    _data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        // PROGRAMAÇÃO DEFENSIVA - para não conseguirem mudar a data inserida
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
