import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

    private elemento: HTMLElement;
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>    
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>?</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
                })}
            </tbody>
        </table>
        `;
    }

    //Para renderizar e capturar através do seletor através do querySelector
    update(model: Negociacoes): void {
        const template = this.template(model);
        console.log(template)
        this.elemento.innerHTML = template;
    }
}