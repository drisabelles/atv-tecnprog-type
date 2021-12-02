import { Entrada } from '../../io/entrada';
import { Empresa } from '../../modelo/empresa';
import { Atualizar } from '../atualizar';
import { Servico } from '../../modelo/servico';

export class AtualizarServico extends Atualizar {
  public entrada: Entrada;

  constructor() {
    super();
    this.entrada = new Entrada();
  }

  protected atualizarVerificado(empresa: Empresa, id: number){
    {
    const atualizarServicos: Servico[] = [];
    empresa.getServicos.forEach(servico => {
      if (servico.id === id) {
        servico.setName(this.entrada.recebeTexto('Nome novo: '));
        servico.setDescricao(this.entrada.recebeTexto('Descrição nova: '));
        servico.setPreco(this.entrada.recebeNumero('Preço novo: '));
      }

      atualizarServicos.push(servico);
    });
    empresa.setServicos(atualizarServicos);
  }

  }public atualizar(servicoId: number, empresa: Empresa): void {
    console.log(
        '\nAtualização do cadastro do serviço -----------------------------'
      );
  
      this.atualizarVerificado(empresa, servicoId);
  
      let outroAtualizar = this.entrada
        .recebeTexto('Deseja atualizar outro serviço? [s/n] ')
        .toLowerCase();
      while (outroAtualizar === 's') {
        const id = this.entrada.recebeNumero('Código do serviço que quer atualizar: ');
        this.atualizarVerificado(empresa, id);
  
        outroAtualizar = this.entrada
          .recebeTexto('Deseja atualizar outro serviço? [s/n]')
          .toLowerCase();
      }
  }
}
