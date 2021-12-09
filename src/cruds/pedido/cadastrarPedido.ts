import { Cliente } from '../../modelo/cliente';
import { Cadastrar } from '../cadastrar';
import { Entrada } from '../../io/entrada';
import { Servico } from '../../modelo/servico';
import { Produto } from '../../modelo/produto';
import { Pedido } from '../../modelo/pedido';
import { acharCliente, acharProduto, acharServico, acharPedido } from '../../busca';
export class CadastrarPedido extends Cadastrar {
  private entrada: Entrada;

  constructor() {
    super();
    this.entrada = new Entrada();
  }

  handleAdicionarProdutoPedido() {
    const produtoListagemPedido: Array<{ produto: Produto; unidade: number }> = [];
    let adicionarProdutoPedido = true;
    do {
      let adicionarItemServico = this.entrada.recebeTexto(
        "Adicionar algum produto ao pedido? [S] Sim | [N] Não "
      );
      if (adicionarItemServico.toLocaleUpperCase() === "S") {
        const acharProduto: Produto = acharProduto(this.listarProdutos);

        const unidadeProduto = this.entrada.recebeNumero("Digite quantos: ");

        const produto = { produto: acharProduto, unidade: unidadeProduto };
        produtoListagemPedido.push(produto);
      } else {
        adicionarProdutoPedido = false;
      }
    } while (adicionarProdutoPedido);
    return produtoListagemPedido;
  }

  handleAdicionarServicoPedido() {
    const servicoListagemPedido: Array<{ servico: Servico; unidade: number }> = [];

    let adicionarServicoPedido = true;

    do {
      let adicionarItemServico = this.entrada.recebeTexto(
        "Adicionar algum serviço ao pedido? [S] Sim | [N] Não "
      );
      if (adicionarItemServico.toLocaleUpperCase() === "S") {
        const acharServico: Servico = acharServico(this.listarServico);
        const unidade = this.entrada.recebeNumero("Digite quantos: ");
        const servico = { servico: acharServico, unidade };
        servicoListagemPedido.push(servico);
      } else {
        adicionarServicoPedido = false;
      }
    } while (adicionarServicoPedido);
    return servicoListagemPedido;
  }

  public cadastrar(): void {
    console.log("\nCadastro de pedido --------------------------------------------");

    const timestamp = new Date();
    const id = Random(timestamp.getTime());
    const cliente: Cliente = acharCliente(this.listarClientes);

    const produtoListagemPedido = this.handleAdicionarProdutoPedido();
    const servicoListagemPedido = this.handleAdicionarServicoPedido();

    const pedido = new Pedido(
      id,
      cliente.cpf,
      timestamp,
      "pending",
      produtoListagemPedido,
      servicoListagemPedido
    );

    const clientePedido: Pedido[] = cliente.pedido;
    clientePedido.push(pedido);
    cliente.pedido = clientePedido;

    console.log("\nPedido realizado com sucesso :)\n");
    console.log(`Código: ${pedido.id}`);
  
  }
}
