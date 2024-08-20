export class Garrafa {
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
    
    public guardarLiquido(pessoas: string): void  {
        console.log(`As ${pessoas} fazem suco de laranja e despejam na garrafa!`);
    }

    public toamarAgua(): void {
        console.log(`no calor tomo agua bem gelada na minha garrafa!`);
    }
}