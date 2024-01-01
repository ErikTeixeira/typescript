export class Negociacoesview {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
            // converte cada elemento em string
            return `
                        <tr>
                            <td>
                                ${new Intl.DateTimeFormat().format(negociacao.data)}
                            </td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>   
                    `;
            // vai juntar tudo em uma string e separar por -> ""
        }).join("")}
            </tbody>
        </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
