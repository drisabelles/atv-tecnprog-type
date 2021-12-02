export class Telefone {
  public ddd: number;
  public numero: number;

  constructor(ddd: number, number: number) {
    this.ddd = ddd;
    this.numero = number;
  }

  //get e set ddd
  public get getDdd(): number {
    return this.ddd;
  }
  public setDdd(ddd: number) {
    this.ddd = ddd;
  }

  //get e set numero
  public get getNumero(): number {
    return this.numero;
  }
  public setNumero(numero: number) {
    this.numero = numero;
  }
}
