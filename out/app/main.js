"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var empresa_1 = require("../modelo/empresa");
var cliente_1 = require("../cruds/cliente");
var produto_1 = require("../cruds/produto");
var servico_1 = require("../cruds/servico");
console.log('Central doGrupo World Beauty ---------------------------');
var empresa = new empresa_1.Empresa('Filial IDRS');
var execution = true;
while (execution) {
    console.log("\n  Op\u00E7\u00F5es:\n\n  CLIENTES\n  \n1 - Cadastrar \n  2 - Atualizar\n  3 - Deletar\n  4 - Listar todos \n  5 - Listar com filtragem\n\n  PRODUTOS\n  \n6 - Cadastrar \n  7 - Atualizar\n  8 - Deletar\n  9 - Listar todos \n  10 - Listar com filtragem\n\n  SERVI\u00C7OS\n  \n11 - Cadastrar \n  12 - Atualizar\n  13 - Deletar\n  14 - Listar todos \n  15 - Listar com filtragem\n\n  \n  Deseja sair? Digite 0\n  ");
    var entrada = new entrada_1.Entrada();
    var opcao = entrada.recebeNumero('Escolha uma das opções e digite o número correspondente: ');
    switch (opcao) {
        case 0:
            execution = false;
            console.log('Obrigada pelo acesso, até mais!');
            break;
        case 1:
            var cadastrarCliente = new cliente_1.CadastrarCliente();
            cadastrarCliente.cadastrar(empresa);
            break;
        case 2:
            var clienteCPFAtualizar = entrada.recebeNumero('Digite o CPF do cliente que deseja atualizar: ');
            var atualizarCliente = new cliente_1.AtualizarCliente();
            atualizarCliente.atualizar(clienteCPFAtualizar, empresa);
            break;
        case 3:
            var cleinteCPFDeletar = entrada.recebeNumero('Digite o CPF do cliente que deseja deletar: ');
            var deletarCliente = new cliente_1.DeletarCliente();
            deletarCliente.deletar(cleinteCPFDeletar, empresa);
            break;
        case 4:
            var listarCliente = new cliente_1.ListarClientes();
            listarCliente.listar(empresa);
            break;
        case 5:
            console.log("\n      FILTROS\n      1 - 10 clientes que mais consumiram em quantidade\n      2 - Classifica\u00E7\u00E3o por g\u00EAnero\n      3 - 10 clientes que menos consumiram produtos ou servi\u00E7os\n      4 - 05 clientes que mais consumiram em valor\n       ");
            opcao = entrada.recebeNumero('Escolha uma das opções e digite o número correspondente: ');
            var listarClientes = new cliente_1.ListarClientes();
            switch (opcao) {
                case 1:
                    listarClientes.listarClientesConsumidoresQuantidade(empresa);
                    break;
                case 2:
                    listarClientes.listarClientesGenero(empresa);
                    break;
                case 3:
                    listarClientes.listarClientesMenosConsumiram(empresa);
                    break;
                case 4:
                    5;
                    clientes;
                    que;
                    mais;
                    consumiram;
                    em;
                    valor, não;
                    em;
                    quantidade;
                    listarClientes.listarClientesConsumidoresValor(empresa);
                    break;
                default:
                    console.log('Operação não entendida :(');
            }
            break;
        case 6:
            var cadastrarProduto = new produto_1.CadastrarProduto();
            cadastrarProduto.cadastrar(empresa);
            break;
        case 7:
            var produtoIdAtualizar = entrada.recebeNumero('Digite o código do produto a ser atualizado: ');
            var atualizarProduto = new produto_1.AtualizarProduto();
            atualizarProduto.atualizar(produtoIdAtualizar, empresa);
            break;
        case 8:
            var produtoIdDeletar = entrada.recebeNumero('Digite o código do produto que deseja excluir: ');
            var deletarProduto = new produto_1.DeletarProduto();
            deletarProduto.deletar(produtoIdDeletar, empresa);
            break;
        case 9:
            var listarProdutos = new produto_1.ListarProdutos();
            listarProdutos.listar(empresa);
            break;
        case 10:
            console.log("\n      FILTROS\n      \n1 - Produtos mais consumidos\n      2 - Produtos mais consumidos por g\u00EAnero\n       ");
            opcao = entrada.recebeNumero('Escolha uma das opções e digite o número correspondente: ');
            var listarProduto = new produto_1.ListarProdutos();
            switch (opcao) {
                case 1:
                    listarProduto.listarProdutosMaisConsumidos(empresa);
                    break;
                case 2:
                    listarProdutos.listarProdutosMaisConsumidosGenero(empresa);
                    break;
                default:
                    console.log('Operação não entendida :(');
            }
            break;
        case 11:
            var cadastrarServico = new servico_1.CadastrarServico();
            cadastrarServico.cadastrar(empresa);
            break;
        case 12:
            var servicoIdAtualizar = entrada.recebeNumero('Digite o código do serviço a ser atualizado: ');
            var atualizarServico = new servico_1.AtualizarServico();
            atualizarServico.atualizar(servicoIdAtualizar, empresa);
            break;
        case 13:
            var servicoIdDeletar = entrada.recebeNumero('Digite o código do serviço a ser deletado: ');
            var deletarServico = new servico_1.DeletarServico();
            deletarServico.deletar(servicoIdDeletar, empresa);
            break;
        case 14:
            var listarServicos = new servico_1.ListarServicos();
            listarServicos.listar(empresa);
            break;
        case 15:
            console.log("\n      FILTROS\n      \n1 - Servi\u00E7os mais consumidos\n      2 - Servi\u00E7os mais consumidos por g\u00EAnero\n       ");
            opcao = entrada.recebeNumero('Escolha uma das opções e digite o número correspondente: ');
            var listarServico = new servico_1.ListarServicos();
            switch (opcao) {
                case 1:
                    listarServico.listarServicosMaisConsumidos(empresa);
                    break;
                case 2:
                    listarServico.listarServicosMaisConsumidosGenero(empresa);
                    break;
                default:
                    console.log('Operação não entendida :(');
            }
            break;
        default:
            console.log('Operação não entendida :(');
    }
}
