export class Porta {
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
    
    public separaAmbiente(pessoas: string): void  {
        console.log(`As ${pessoas} colocam porta para separar quartos de sala!`);
    }

    public abreFecha(): void {
        console.log(`quando uma pessoa chega na sua casa vc abre e fecha a porta!`);
    }
}