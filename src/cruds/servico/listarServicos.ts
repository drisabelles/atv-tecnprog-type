import { Listar } from '../listar';
import { Empresa } from '../../modelo/empresa';

export class ListarServicos extends Listar {
  constructor() {
    super();
  }

  public list(empresa: Empresa): void {
    console.log(
      '\nLista dos serviços existentes -------------------------------------'
    );

    const servicos = empresa.getServicos;
    servicos.forEach(servico => {
      console.log(`
      Código: ${servico.id}
      Nome: ${servico.getNome}
      Preço: R$ ${servico.getPreco}
      -------------------------------------------
      `);
    });

    console.log(
      `\n----------------------------------------------------------------`
    );
  }
}
