import { Deletar } from '../deletar';
import { Entrada } from '../../io/entrada';
import { Produto } from '../../modelo/produto';
import { Empresa } from '../../modelo/empresa';

export class DeletarProduto extends Deletar {
  public entrada: Entrada;

  constructor() {
    super();
    this.entrada = new Entrada();
  }

  protected deletarVerificado(empresa: Empresa, id: number) {
    let produtoDeletar;
    empresa.getProdutos.map(produto => {
      if (produto.id === id) {
        produtoDeletar = produto;
      }
    });

    let confirmacao = this.entrada
      .recebeTexto(
        'Quer mesmo exlcuir o produto ${produtoDeletar.getNome}? [s/n]'
      )
      .toLowerCase();

    if (confirmacao === 's') {
      let atualizarProdutos: Produto[] = [];
      empresa.getProdutos.map(produto => {
        if (produto.id !== id) {
          atualizarProdutos.push(produto);
        }
      });
      empresa.setProdutos(atualizarProdutos);
      console.log('\nProduto excluído com sucesso! :)');
      console.log(
        '----------------------------------------------------------------'
      );
    } else {
      console.log(`\nTarefa interrompida!`);
      console.log(
        '----------------------------------------------------------------'
      );
    }
  }

  public deletar(productId: number, empresa: Empresa): void {
    console.log(
      `\nExclusão do produto ---------------------------------------------`
    );
    this.deletarVerificado(empresa, productId);

    let outroDeletar = this.entrada
      .recebeTexto('Deseja excluir outro produto? [s/n] ')
      .toLowerCase();
    while (outroDeletar === 's') {
      const id = this.entrada.recebeNumero('Código do produto que quer excluir: ');
      this.deletarVerificado(empresa, id);

      outroDeletar = this.entrada
        .recebeTexto('Deseja excluir outro produto? [s/n] ')
        .toLowerCase();
    }

    console.log(
      `----------------------------------------------------------------`
    );
  }
}
