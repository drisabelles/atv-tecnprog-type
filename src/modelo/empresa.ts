import { Cliente } from './cliente';
import { Produto } from './produto';
import { Servico } from './servico';
import { Pedido } from './pedido';

export class Empresa {
  public nome: string;
  public clientes?: Cliente[];
  public produtos?: Produto[];
  public servicos?: Servico[];
  public pedidos?: Pedido[];

  constructor(
    nome: string,
    clientes?: Cliente[],
    produtos?: Produto[],
    servicos?: Servico[],
    pedidos?: Pedido[],
  ) {
    this.nome = nome;
    if (
      clientes !== undefined &&
      produtos !== undefined &&
      servicos !== undefined &&
      pedidos  !== undefined && )
    
      {
      this.clientes = clientes;
      this.produtos = produtos;
      this.servicos = servicos;
      this.pedidos = pedidos;
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

  public get getPedidos(): Pedido[] {
    return this.pedidos || [];
  }
  public setPedidos(pedidos: Pedido[]) {
    this.pedidos = pedidos;
  }

}
