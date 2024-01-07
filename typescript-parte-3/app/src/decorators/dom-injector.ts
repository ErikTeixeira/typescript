// Não precisa colocar manualmente mas o elemento o decorator faz automaticamente

// decorator de propriedade não de método
// -----  Não tem referencia para uma instancia da classe
// e precisa de uma instancia para quando buscar um elemento do dom conseguir atribuir a propriedade da classe
// para conseguir tem que alterar o prototype, transformar as propriedades que o decorator foi aplicado em getter, porque se ele for acessado vai ser durante o run time, tendo a instancia da propriedade da classe

// seletor -> id do elemento
export function domInjector (seletor: string) {
    return function(
        // se for colocado em uma propriedade estatica de uma classe, ele vai retornar a função construtora da classe
        // se colocar em uma não estatica, vai retornar o prototype da classe
        target: any,
        // nome do atributo que o decorator foi colocado
        propertyKey: string
    ) {

        console.log(`Modificando Prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey} `);

        // poder aceitar o null  -> | null
        // vai quardar o valor de elemento, só vai ser nulo a primeira vez
        let elemento: HTMLElement | null = null;

        // se usar arrow function o this não e dinamico
        const getter = function() {
            if (!elemento) {
                // se for falso
                // casting - <HTMLElement> - falando que ele nunca vai ser nulo
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`Buscado elemento DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
            }
            // se for verdadeiro
            return elemento;
        }

        // modificar o target(prototype), sendo essa propriedade(propertyKey), e nome do getter 
        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}