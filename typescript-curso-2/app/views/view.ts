export abstract class View<T>{
    // Abstract -> para não ser possivel instanciar está classe

    // GENERICS - <> - para funcionar independente do tipo do model - se é Negociacoes ou string
    // Depois vai em cada classe que está dando extends nessa e coloca o tipo que quer que ela seja 

    // os filhos na heranã não conseguem acessar oum elemento private do pai
    // se usa o protected, quem herdar está classe pode usar o elemento
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    // Não precisa ter deste modo no abstract
    // template(model: T): string {
    //     // aparece isso se não sobreescrever o template
    //     throw Error ("Classe filha precisa implementar o método template");
    // }

    abstract template(model: T): string;
    // já da o erro na hora de compilar e não em run time - aparece que e obrigatorio tem um método template

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerText = template;
    }

}