import { Entrada } from '../../io/entrada';
import { Telefone } from '../../modelo/telefone';
import { Produto } from '../../modelo/produto';
import { Empresa } from '../../modelo/empresa';
import { Atualizar } from '../atualizar';

export class AtualizarProduto extends Atualizar {
  public entrada: Entrada;

  constructor() {
    super();
    this.entrada = new Entrada();
  }

  protected atualizarVerificado(empresa: Empresa, id: number) {
    const atualizarProdutos: Produto[] = [];
    empresa.getProdutos.forEach(produto => {
      if (produto.id === id) {
        produto.setNome(this.entrada.recebeTexto('Nome novo: '));
        produto.setDescricao(this.entrada.recebeTexto('Descrição nova: '));
        produto.setPreco(this.entrada.recebeNumero('Preço novo: '));
      }

      atualizarProdutos.push(produto);
    });
    empresa.setProdutos(atualizarProdutos);
  }

  public atualizar(productId: number, empresa: Empresa): void {
    console.log(
      `\nAtualização de cadastro de produto -----------------------------`
    );

    this.atualizarVerificado(empresa, productId);

    let outraAtualizacao = this.entrada
      .recebeTexto('Deseja atualizar mais algum produto? [s/n] ')
      .toLowerCase();
    while (outraAtualizacao === 's') {
      const id = this.entrada.recebeNumero('Digite o código que quer atualizar: ');
      this.atualizarVerificado(empresa, id);

      outraAtualizacao = this.entrada
        .recebeTexto('Deseja atualizar mais algum produto? [s/n] ')
        .toLowerCase();
    }

    console.log(
      `----------------------------------------------------------------`
    );
  }
}
