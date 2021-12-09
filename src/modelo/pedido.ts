import { Cliente } from "./cliente";
import { Produto } from "./produto";
import { Servico } from "./servico";

export class Pedido {
  readonly id: number;
  readonly cliente_id: number;
  public pedido_valor: number;

  readonly listarProdutos?: Array<{ produto: Produto; unidade: number }>;
  readonly listarServicos?: Array<{ servico: Servico; unidade: number }>;

  constructor(
    id: number,
    cliente_id: number,
    listarProdutos?: Array<{ produto: Produto; unidade: number }>,
    listarServicos?: Array<{ servico: Servico; unidade: number }>
  ) {
    this.id = id;
    this.cliente_id = cliente_id;

    this.listarProdutos = listarProdutos;
    this.listarServicos = listarServicos;
    this.pedido_valor = 0;
    this.handlePedidoValor();
  }

  handlePedidoValor() {
    this.listarProdutos?.forEach(({ produto, unidade }) => {
      this.pedido_valor += produto.preco * unidade;
    });

    this.listarServicos?.forEach(({ servico, unidade }) => {
      this.pedido_valor += servico.preco * unidade;
    });
  }
}

