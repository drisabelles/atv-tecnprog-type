import { Cadastrar } from '../cadastrar';
import { Entrada } from '../../io/entrada';
import { Servico } from '../../modelo/servico';
import { Empresa } from '../../modelo/empresa';

export class CadastrarServico extends Cadastrar {
  private entrada: Entrada;

  constructor() {
    super();
    this.entrada = new Entrada();
  }

  public cadastrar(empresa: Empresa): void {
    console.log(
      '\nCadastro de produto --------------------------------------------'
    );
    const name = this.entrada.recebeTexto('Nome: ').toLowerCase();
    const descricao = this.entrada.recebeTexto('Descrição: ').toLowerCase();
    const preco = this.entrada.recebeNumero('Preço: R$');

    const novoServico = new Servico(name, descricao
, preco);

    const servicos = empresa.getServicos;
    servicos.push(novoServico);
    empresa.setServicos(servicos);

    console.log('\nCadastro concluído com sucesso :)\n');
    console.log(
      '----------------------------------------------------------------'
    );
  }
}
