export class Placa {
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
    
    public sinalizar(pessoas: string): void  {
        console.log(`As ${pessoas} se sinalizam na estrada para cidade vizinha!`);
    }

    public indicar(): void {
        console.log(`serve para indicar aonde tem que virar quando tem que parar!`);
    }
}