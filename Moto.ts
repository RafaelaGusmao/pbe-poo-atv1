export class Moto {
    private tanque: void;
    private cor: string;
    private tamanho: number;

    public constructor(_tanque: void, _cor: string, _tamanho: number) {
        this.tanque = _tanque;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }

    public getTanque(): void {
        return this.tanque;
    }

    public getCor(): string {
        return this.cor;
    }

    public getTamanho(): number {
        return this.tamanho;
    }
    
    public grau(pessoas: string): void  {
        console.log(`As ${pessoas} dao grau de moto por ai!`);
    }

    public locomocao(): void {
        console.log(`uma moto serve para uma pessoa se locomover de um lugar pro outro!`);
    }
}