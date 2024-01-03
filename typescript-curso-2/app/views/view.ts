export abstract class View<T>{
    // Abstract -> para não ser possivel instanciar está classe

    // GENERICS - <> - para funcionar independente do tipo do model - se é Negociacoes ou string
    // Depois vai em cada classe que está dando extends nessa e coloca o tipo que quer que ela seja 

    // os filhos na herança não conseguem acessar um elemento private do pai
    // se usa o protected, quem herdar está classe pode usar o elemento
    protected elemento: HTMLElement;

    private escapar = false;

    // parametro opcional -> escapar?
    // parametros opcionais são sempre no final senão não funciona
    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        // teste de null
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            // faz este else porque não da para colocar outro no lugar do que deu erro
            throw Error(`Seletor - ${seletor} - não existe no DOM. Verifique`);
        }
        
        if (escapar) {
            // Se não fizer isso o escapar do parametro vsi ser undefined
            this.escapar = escapar;
        }
    }

    // Não precisa ter deste modo no abstract
    // template(model: T): string {
    //     // aparece isso se não sobreescrever o template
    //     throw Error ("Classe filha precisa implementar o método template");
    // }

    protected abstract template(model: T): string;
    // coloca protected para apenas ele proprio ter acesso e os filhos dele - ter que colocar protected nos filhos tmb

    // já da o erro na hora de compilar e não em run time - aparece que e obrigatorio tem um método template

    update(model: T): void {
        let template = this.template(model);

        if (this.escapar) {
            // expressão regular que vai remover tag script no template
            template = template.replace(/<script>[/s/S]*?<\/script>/, "");
        }

        this.elemento.innerHTML = template;
    }

}