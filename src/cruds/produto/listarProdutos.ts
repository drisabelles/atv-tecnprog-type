import { Listar } from '../listar';
import { Empresa } from '../../modelo/empresa';

export class ListarProdutos extends Listar {
  constructor() {
    super();
  }

  public listar(empresa: Empresa): void {
    console.log(
      '\nLista dos produtos existentes -------------------------------------'
    );

    const produtos = empresa.getProdutos;
    produtos.forEach(produto => {
      console.log(`
      Código: ${produto.id}
      Nome: ${produto.getNome}
      Preço: R$ ${produto.getPreco}
      -------------------------------------------
      `);
    });

    console.log(
      `\n----------------------------------------------------------------`
    );
  }
}
