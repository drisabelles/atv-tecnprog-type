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

console.log('Central doGrupo World Beauty ---------------------------');
const empresa = new Empresa('Filial IDRS');
let execution = true;

while (execution) {
  console.log(`
  Opções:

  CLIENTES
  \n1 - Cadastrar 
  2 - Atualizar
  3 - Deletar
  4 - Listar todos 
  5 - Filtros

  PRODUTOS
  \n6 - Cadastrar 
  7 - Atualizar
  8 - Deletar
  9 - Listar todos 
  10 - Filtros

  SERVIÇOS
  \n11 - Cadastrar 
  12 - Atualizar
  13 - Deletar
  14 - Listar todos 
  15 - Filtros

  
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

    case 6:
      const cadastrarProduto = new CadastrarProduto();
      cadastrarProduto.cadastrar(empresa);
      break;
    case 7:
      const produtoIdAtualizar = entrada.recebeNumero(
        'Digite o código do produto a ser atualizado: '
      );
      const atualizarProduto = new AtualizarProduto();
      atualizarProduto.atualizar(produtoIdAtualizar, empresa);
      break;
    case 8:
      const produtoIdDeletar = entrada.recebeNumero(
        'Digite o código do produto que deseja excluir: '
      );
      const deletarProduto = new DeletarProduto();
      deletarProduto.deletar(produtoIdDeletar, empresa);
      break;
    case 9:
      const listarProdutos = new ListarProdutos();
      listarProdutos.listar(empresa);
      break;
      
    case 11:
      const cadastrarServico = new CadastrarServico();
      cadastrarServico.cadastrar(empresa);
      break;
    case 12:
      const servicoIdAtualizar = entrada.recebeNumero(
        'Digite o código do serviço a ser atualizado: '
      );
      const atualizarServico = new AtualizarServico();
      atualizarServico.atualizar(servicoIdAtualizar, empresa);
      break;
    case 13:
      const servicoIdDeletar = entrada.recebeNumero(
        'Digite o código do serviço a ser deletado: '
      );
      const deletarServico = new DeletarServico();
      deletarServico.deletar(servicoIdDeletar, empresa);
      break;
    case 14:
      const listarServicos = new ListarServicos();
      listarServicos.listar(empresa);
      break;
    default:
      console.log('Operação não entendida :(');
  }
}
