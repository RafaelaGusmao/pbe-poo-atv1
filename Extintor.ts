export class Extintor {
    private formato: string;
    private cor: string;
    private tamanho: number;

    public constructor(_formato: string, _cor: string, _tamanho: number) {
        this.formato = _formato;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }

    public getFormato(): string {
        return this.formato;
    }

    public getCor(): string {
        return this.cor;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public apagar(extintor: string): void  {
        console.log(`O ${extintor} serve para apagar o fogo!`);
    }

    public salvaVida(): void {
        console.log(`o bombeiro usa para salvar as vidas!`);
    }
}
