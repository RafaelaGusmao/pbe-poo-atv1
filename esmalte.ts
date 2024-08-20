export class Esmalte {
    
    private formato: string;
    private marca: string;
    private cor: string;

    public constructor(_formato: string, _marca: string, _cor: string) {
        this.formato =_formato;
        this.marca = _marca;
        this.cor = _cor;
    }

    public getFormato(): string {
        return this.formato;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getCor(): string {
        return this.cor;
    }

    
    public pintarUnha(pessoa: string): void  {
        console.log(`A ${pessoa} pinta a unha!`);
    }

    public protege(): void {
        console.log(`protege a unha!`);
    }
}

   