
export class Negociacao {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
        ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    //programação defensiva para que não haja a possíbilidade de setar novas datas para o método
    get data() : Date {
        const data = new Date(this._data.getTime());
        return this._data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string) {
        const exp = /-/g; //expressão regular para encontrar o hífen
        const date = new Date(dataString.replace(exp, ',')); //substituindo o hífen por vírgula no formato data utlizando expressao regular
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}