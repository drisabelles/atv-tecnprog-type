import { Cliente } from "./modelo/cliente";
import { Produto } from "./modelo/produto";
import { Servico } from "./modelo/servico";
import { Entrada } from "./io/entrada";
import { ListarClientes } from "./cruds/cliente";

const entrada = new Entrada();

const acharCliente = (listarClientes: Array<Cliente>, cpf?: string) => {
  let cpfNumero = !cpf ? entrada.recebeTexto('Digite o CPF: ') : cpf;

  const filtragemCliente = listarClientes.filter(
    (cliente) => cliente.getCPF == cpfNumero
  );

  if (filtragemCliente.length == 0) {
    console.log("Não existe o cliente com o cpf citado!");
    return acharCliente(listarClientes);
  }
  return filtragemCliente[0];
};

const acharProduto = (listarProdutos: Array<Produto>, id?: number) => {
  let codProduto = !id ? entrada.recebeNumero('Digite o código do produto: ') : id;

  const filtragemProduto = listarProdutos.filter(
    (product) => product.id === codProduto
  );

  if (filtragemProduto.length == 0) {
    console.log("Não existe produto com o código citado!");
    return acharProduto(listarProdutos);
  }
  return filtragemProduto[0];
};

const acharServico = (listarServico: Array<Servico>, id?: number) => {
  let codServico = !id ? entrada.recebeNumero('Digite o código do serviço: ') : id;

  const filtragemServico = listarServico.filter(
    (servico) => servico.id === codServico
  );

  if (filtragemServico.length == 0) {
    console.log("Não existe serviço com o código citado!");
    return acharServico(listarServico);
  }
  return filtragemServico[0];
};

const acharPedido = (listarClientes: Array<Cliente>, id?: number) => {
  const cliente: Cliente = acharCliente(listarClientes);
  let codPedido = !id ? entrada.recebeNumero("Digite o código do pedido: ") : id;

  const filtragemPedido = cliente.pedido.filtrar((pedido) => pedido.id === codPedido);

  if (filtragemPedido.length == 0) {
    console.log("Não existe pedido com o código citado!");
    return acharPedido(listarClientes);
  }
  return filtragemPedido[0];
};

export { acharCliente, acharProduto, acharServico, acharPedido };
