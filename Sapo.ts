export class Sapo {
    private especie: string;
    private cor: string;
    private tamanho: number;

    public constructor(_tamanho: number, _especie: string, _cor: string) {
        this.especie = _especie;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public getCor(): string {
        return this.cor;
    }

    public coaxar(sapo: string): void  {
        console.log(`O ${sapo} faz coaxar!`);
    }

    public pular(): void {
        console.log(`o sapo sai pulando!`);
    }
}
