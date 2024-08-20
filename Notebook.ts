export class Notebook {
    private marca: string;
    private modelo: string;
    private sistema: string;

    public constructor(_sistema: string, _marca: string, _modelo: string) {
        this.marca = _marca;
        this.sistema = _sistema;
        this.modelo = _modelo;
    }

    public getSistema(): string {
        return this.sistema;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public escrever(pessoa: string): void  {
        console.log(`A ${pessoa} escreve no notebook!`);
    }

    public comunicar(): void {
        console.log(`a gente se comunica pelo notebook!`);
    }
}
