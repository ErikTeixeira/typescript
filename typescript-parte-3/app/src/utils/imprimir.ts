// função utilitária
import { Imprimivel } from "./imprimivel.js";

// só vai funcionar quem tem o extends do imprimivel
export function imprimir(...objetos: Array<Imprimivel>) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}