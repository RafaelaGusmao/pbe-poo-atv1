export class Cadeira {
    private modelo: string;
    private cor: string;
    private tamanho: number;

    public constructor(_modelo: string, _cor: string, _tamanho: number) {
        this.modelo = _modelo;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getCor(): string {
        return this.cor;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public sentar(pessoas: string): void  {
        console.log(`As ${pessoas} sentam na cadeira!`);
    }

    public decorar(): void {
        console.log(`serve para decorar a casa!`);
    }
}