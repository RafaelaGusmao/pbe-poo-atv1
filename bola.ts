export class bola {
    private tamanho: number;
    private modelo: string;
    private marca: string;

    public constructor(_tamanho: number, _modelo: string, _marca: string) {
        this.tamanho = _tamanho;
        this.marca = _marca;
        this.modelo = _modelo;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public jogarBola(pessoa: string): void  {
        console.log(`A ${pessoa} chutou a bola!`);
    }

    public rolarBola(): void {
        console.log(`a bola está rolando!`);
    }
}
