import { Entrada } from '../io/entrada';
import { Empresa } from '../modelo/empresa';

import {
  CadastrarCliente,
  DeletarCliente,
  ListarClientes,
  AtualizarCliente,
} from '../cruds/cliente';

import {
  CadastrarProduto,
  DeletarProduto,
  ListarProdutos,
  AtualizarProduto,
} from '../cruds/produto';

import {
  CadastrarServico,
  DeletarServico,
  ListarServicos,
  AtualizarServico,
} from '../cruds/servico';

import {
  CadastrarPedido,
  DeletarPedido,
  ListarPedidos,
  AtualizarPedido,
} from '../cruds/pedido';

console.log('Central do Grupo World Beauty ---------------------------');
const empresa = new Empresa('Filial IDRS');
let execution = true;

while (execution) {
  console.log(`
  Opções:

  CLIENTES
  \n>1< - Cadastrar 
  >2< - Atualizar
  >3< - Deletar
  >4< - Listar todos 

  PRODUTOS
  \n>5< - Cadastrar 
  >6< - Atualizar
  >7< - Deletar
  >8< - Listar todos 

  SERVIÇOS
  \n>9< - Cadastrar 
  >10< - Atualizar
  >11< - Deletar
  >12< - Listar todos

  PEDIDOS
  \n>13< - Cadastrar 
  >14< - Atualizar
  >15< - Deletar
  >16< - Listar todos 

  FILTROS
  \n>17< - 10 clientes que mais consumiram
  >18< - 10 clientes que menos consumiram
  >19< - 10 clientes que mais gastaram
  >20< - Clientes listados por gênero
  >21< - Produtos e serviços mais consumidos
  >22< - Produtos e serviços mais consumidos por gênero
  
  Deseja sair? Digite 0
  `);

  const entrada = new Entrada();
  let opcao = entrada.recebeNumero('Escolha uma das opções e digite o número correspondente: ');

  switch (opcao) {
    case 0:
      execution = false;
      console.log('Obrigada pelo acesso, até mais!');
      break;

    case 1:
      const cadastrarCliente = new CadastrarCliente();
      cadastrarCliente.cadastrar(empresa);
      break;
    case 2:
      const clienteCPFAtualizar = entrada.recebeNumero(
        'Digite o CPF do cliente que deseja atualizar: '
      );
      const atualizarCliente = new AtualizarCliente();
      atualizarCliente.atualizar(clienteCPFAtualizar, empresa);
      break;
    case 3:
      const cleinteCPFDeletar = entrada.recebeNumero(
        'Digite o CPF do cliente que deseja deletar: '
      );
      const deletarCliente = new DeletarCliente();
      deletarCliente.deletar(cleinteCPFDeletar, empresa);
      break;
    case 4:
      const listarCliente = new ListarClientes();
      listarCliente.listar(empresa);
      break;

    case 5:
      const cadastrarProduto = new CadastrarProduto();
      cadastrarProduto.cadastrar(empresa);
      break;
    case 6:
      const produtoIdAtualizar = entrada.recebeNumero(
        'Digite o código do produto a ser atualizado: '
      );
      const atualizarProduto = new AtualizarProduto();
      atualizarProduto.atualizar(produtoIdAtualizar, empresa);
      break;
    case 7:
      const produtoIdDeletar = entrada.recebeNumero(
        'Digite o código do produto que deseja excluir: '
      );
      const deletarProduto = new DeletarProduto();
      deletarProduto.deletar(produtoIdDeletar, empresa);
      break;
    case 8:
      const listarProdutos = new ListarProdutos();
      listarProdutos.listar(empresa);
      break;
      
    case 9:
      const cadastrarServico = new CadastrarServico();
      cadastrarServico.cadastrar(empresa);
      break;
    case 10:
      const servicoIdAtualizar = entrada.recebeNumero(
        'Digite o código do serviço a ser atualizado: '
      );
      const atualizarServico = new AtualizarServico();
      atualizarServico.atualizar(servicoIdAtualizar, empresa);
      break;
    case 11:
      const servicoIdDeletar = entrada.recebeNumero(
        'Digite o código do serviço a ser deletado: '
      );
      const deletarServico = new DeletarServico();
      deletarServico.deletar(servicoIdDeletar, empresa);
      break;
    case 12:
      const listarServicos = new ListarServicos();
      listarServicos.listar(empresa);
      break;
    
    case 13:
      const cadastrarPedido = new CadastrarPedido();
      cadastrarPedido.cadastrar;
      break;
    case 14:
      const pedidoIdAtualizar = entrada.recebeNumero(
        'Digite o código do pedido a ser atualizado: '
      );
      const atualizarPedido = new AtualizarPedido();
      atualizarPedido.atualizar(pedidoIdAtualizar, empresa);
      break;
    case 15:
      const pedidoIdDeletar = entrada.recebeNumero(
        'Digite o código do pedido a ser deletado: '
      );
      const deletarPedido = new DeletarPedido();
      deletarPedido.deletar(pedidoIdDeletar, empresa);
      break;
    case 16:
      const listarPedidos = new ListarPedidos();
      listarPedidos.listar(empresa);
      break;

    case 17:
      this.getClientesMAIScons();
      break;
    case 18:
      this.getClientesMENOScons();
      break;
    case 19:
      this.getClientesGASTO();
      break;
    case 20:
      this.getClientesGENERO();
      break;
    case 21:
      this.getProdServMAIS();
      break;
    case 22:
      this.getProdServMAISgenero();
      break;
    default:
      console.log('Operação não entendida :(');
  }

  
}

