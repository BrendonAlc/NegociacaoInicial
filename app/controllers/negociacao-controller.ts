import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js"
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociaciesView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona() : void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario();
    }
    
    criaNegociacao(): Negociacao {
        const exp = /-/g; //expressão regular para encontrar o hífen
        const date = new Date(this.inputData.value.replace(exp, ',')); //substituindo o hífen por vírgula no formato data utlizando expressao regular
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);

    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}