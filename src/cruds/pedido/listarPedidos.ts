import { Entrada } from "../../io/entrada";
import { Listar } from "../listar";
import { Servico } from "../modelo/servico";
import { Produto } from "../modelo/produto";
import { Cliente } from "../modelo/cliente";
import{
  acharCliente,
  acharProduto,
  acharServico,
  acharPedido,
} from "../services/search.service";

export class ListarPedidos extends Listar {
    constructor() {
      super();
    }

    public show(): void {
        const pedido: Pedido = acharPedido(this.listarPedidos);
        const formato = {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
        };

        console.log("Código, Nome, Quantidade, Unidade, Preço");
        console.log("_________________________________________");
        pedido.listarProduto?.forEach(({ produto, unidade }) => {
          const pedidoValor = unidade * produto.preco;
          const formatoPedidoValor = pedidoValor.toLocaleString("pt-BR", formato);
          console.log(
            `${produto.id}, ${produto.nome}, ${unidade} UN, ${formatoPedidoValor}`
          );
        });
        pedido.listarServico?.forEach(({ servico, unidade }) => {
          const pedidoValor = unidade * servico.preco;
          const formatoPedidoValor = pedidoValor.toLocaleString("pt-BR", formato);
          console.log(
            `${servico.id}, ${servico.nome}, ${unidade} UN, ${formatoPedidoValor}`
          );
        });
        console.log();
    }
}