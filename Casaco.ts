export class Casaco {
    private marca: string;
    private cor: string;
    private tamanho: number;

    public constructor(_tamanho: number, _marca: string, _cor: string) {
        this.marca = _marca;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getCor(): string {
        return this.cor;
    }

    public vestirCasaco(pessoa: string): void  {
        console.log(`A ${pessoa} veste o casaco!`);
    }

    public agasalhar(): void {
        console.log(`serve para se agasalhar no frio!`);
    }
}
