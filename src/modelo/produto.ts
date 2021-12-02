export class Produto {
  readonly id: number;
  public nome: string;
  public descricao: string;
  public preco: number;

  constructor(
    nome: string,
    descricao: string,
    preco: number,
  ) {
    this.id = Math.random();
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
  }

  public get getNome(): string {
    return this.nome;
  }
  public setNome(nome: string) {
    this.nome = nome;
  }

  public get getDescricao(): string {
    return this.descricao;
  }
  public setDescricao(descricao: string) {
    this.descricao = descricao;
  }

  public get getPreco(): number {
    return this.preco;
  }
  public setPreco(preco: number) {
    this.preco = preco;
  }
}
