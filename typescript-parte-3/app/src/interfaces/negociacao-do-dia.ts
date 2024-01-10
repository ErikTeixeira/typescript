// Não podemos usar os modificadores private, protected e public nas propriedades de uma interface
export interface NegociacoesDoDia {
    // vai servir para ninguem digitar errado - montante e vezes
    // não funciona  - montante: number = 10;
    montante: number;
    vezes: number;

    // sé mudar nome para outro o visual studio tem um atalho para renomear tudo de uma vez - Rename Symbol
}