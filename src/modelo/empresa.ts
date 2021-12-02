import { Cliente } from './cliente';
import { Produto } from './produto';
import { Servico } from './servico';

export class Empresa {
  public nome: string;
  public clientes?: Cliente[];
  public produtos?: Produto[];
  public servicos?: Servico[];

  constructor(
    nome: string,
    clientes?: Cliente[],
    produtos?: Produto[],
    servicos?: Servico[],
  ) {
    this.nome = nome;
    if (
      clientes !== undefined &&
      produtos !== undefined &&
      servicos !== undefined &&
    )
      {
      this.clientes = clientes;
      this.produtos = produtos;
      this.servicos = servicos;
    }
  }

  public get getNome(): string {
    return this.nome;
  }
  public setNome(nome: string) {
    this.nome = nome;
  }

  public get getClientes(): Cliente[] {
    return this.clientes || [];
  }
  public setClientes(clientes: Cliente[]) {
    this.clientes = clientes;
  }

  public get getProdutos(): Produto[] {
    return this.produtos || [];
  }
  public setProdutos(produtos: Produto[]) {
    this.produtos = produtos;
  }

  public get getServicos(): Servico[] {
    return this.servicos || [];
  }
  public setServicos(servicos: Servico[]) {
    this.servicos = servicos;
  }

}
