import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js"
import { mensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociaciesView', true);
    private mensagemView = new mensagemView('#mesagemView');
    private readonly DOMINGO = 0;
    private readonly SABADO = 6;

    //Utilizar castning explicito "as HTMLInputElement" devido ao parâmetro strictNullChecks no tsconfig.json estar como true
    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this.inputValor = <HTMLInputElement>document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona() : void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (!this.DiaUtil(negociacao.data)) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas.')
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.AtualizaView();
    }

    /*Método para validação de dia útil*/
    private DiaUtil(data: Date ) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO; 
        
    }


    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    /*Método para utilizar updates para atualiza view*/
    private AtualizaView(){
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!')
    }
}