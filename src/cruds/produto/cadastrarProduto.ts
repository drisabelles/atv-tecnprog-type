import { Cadastrar } from '../cadastrar';
import { Entrada } from '../../io/entrada';
import { Produto } from '../../modelo/produto';
import { Empresa } from '../../modelo/empresa';

export class CadastrarProduto extends Cadastrar {
  private entrada: Entrada;

  constructor() {
    super();
    this.entrada = new Entrada();
  }

  public cadastrar(empresa: Empresa): void {
    console.log(
      `\nCadastro de produto --------------------------------------------`
    );

    const nome = this.entrada.recebeTexto('Nome: ').toLowerCase();
    const descricao = this.entrada.recebeTexto('Descrição: ').toLowerCase();
    const preco = this.entrada.recebeNumero('Preço: R$');

    const novoProduto = new Produto(nome, descricao, preco);

    const produtos = empresa.getProdutos;
    produtos.push(novoProduto);
    empresa.setProdutos(produtos);

    console.log(`\nCadastro concluído com sucesso :)\n`);
    console.log(
      `----------------------------------------------------------------`
    );
  }
}
