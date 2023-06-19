import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
    
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
                            <td>${this.conversorDeData(negociacao.data)}</td> 
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    //Para renderizar e capturar através do seletor através do querySelector
    public update(model: Negociacoes): void {
        const template = this.template(model);
        console.log(template)
        this.elemento.innerHTML = template;
    }

    /*criar método privado de conversor de data*/
    private conversorDeData(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}