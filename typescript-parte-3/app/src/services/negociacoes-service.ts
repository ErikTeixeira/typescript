import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    // retorna uma promise que retorna Negociacao - da fetch API
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        // assincrona - then - encaminha uma resposta do back end
        // retorna JSON - converter para um objeto js
        return fetch("http://localhost:8080/dados")
        .then(res => res.json())
        .then(
            // resultado é encaminhado para este then - lista de dados
            // tipou com a interface - negociacoesDoDia
            (dados: NegociacoesDoDia[]) => {
                return dados.map(dadosDeHoje => {
                    return new Negociacao(new Date(), dadosDeHoje.vezes, dadosDeHoje.montante)
                })
            });
    }
}