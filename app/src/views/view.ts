export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(selector: string, escapar?: boolean){ //colocar parametro escapar para ser opcional
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw new Error(`Seletor ${selector} não existe no DOM. Verifique.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
        }
        this.elemento.innerHTML = template;
        
        
    }

    protected abstract template(model: T): string; /*método filha tem que implementar o template*/ 
}