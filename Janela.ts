export class Janela {
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
    
    public iluminar(pessoas: string): void  {
        console.log(`As ${pessoas} abrem quando precisam acordar uma pessoa dormindo!`);
    }

    public ventilar(): void {
        console.log(`no calor abre a janela para entrar o vento refrescante!`);
    }
}