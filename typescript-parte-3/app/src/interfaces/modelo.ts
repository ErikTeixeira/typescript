import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

// Uma interface pode extender quantas interfaces quiser, deixando o código mais limpo e sem precisar lembrar de implementar várias interfaces na classe
// o comparavel vai receber o T do Modelo
export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}