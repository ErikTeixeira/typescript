// sempre que quiser gararntir um comportamendo em diversos lugares/classes e não quer herdar nenhum código - interface 

// toda interface é publica, e todo método dela e abstrato
// melhor ser uma interface do que uma classe

// export class Negociacao implements Imprimivel

// quando implemento uma interface - obrigatorio implementar os métodos dela
export interface Imprimivel {
    paraTexto(): string;

}