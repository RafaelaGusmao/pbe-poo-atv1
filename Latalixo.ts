export class LataLixo {
    private formato: number;
    private cor: string;
    private tamanho: number;

    public constructor(_formato: number, _cor: string, _tamanho: number) {
        this.formato = _formato;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }

    public getFormato(): number {
        return this.formato;
    }

    public getCor(): string {
        return this.cor;
    }

    public getTamanho(): number {
        return this.tamanho;
    }
    
    public armazenar(pessoas: string): void  {
        console.log(`As ${pessoas} armazenam o lixo na lata!`);
    }

    public descartar(): void {
        console.log(`serve para descartar o lixo!`);
    }
}