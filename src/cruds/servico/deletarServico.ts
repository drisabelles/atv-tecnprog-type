import { Deletar } from '../deletar';
import { Entrada } from '../../io/entrada';
import { Servico } from '../../modelo/servico';
import { Empresa } from '../../modelo/empresa';

export class DeletarServico extends Deletar {
  public entrada: Entrada;

  constructor() {
    super();
    this.entrada = new Entrada();
  }

  protected deletarVerificado(empresa: Empresa, id: number) {
    let servicoDeletar;
    empresa.getServicos.map(servico => {
      if (servico.id === id) {
        servicoDeletar = servico;
      }
    });

    let confirmacao = this.entrada
      .recebeTexto(
        `Quer mesmo deletar o serviço ${servicoDeletar.getName}? [s/n]`
      )
      .toLowerCase();

    if (confirmacao === 's') {
      let atualizarServicos: Servico[] = [];
      empresa.getServicos.map(servico => {
        if (servico.id !== id) {
          atualizarServicos.push(servico);
        }
      });
      empresa.setServicos(atualizarServicos);
      console.log('\nExcluído com sucesso! :)');
      console.log(
        '----------------------------------------------------------------'
      );
    } else {
      console.log('\nTarefa interrompida!');
      console.log(
        '----------------------------------------------------------------'
      );
    }
  }

  public deletar(servicoId: number, empresa: Empresa): void {
    console.log(
      '\nExclusão de serviço ---------------------------------------------'
    );
    this.deletarVerificado(empresa, servicoId);

    let outroDeletar = this.entrada
      .recebeTexto('Deseja excluir outro serviço? [s/n]')
      .toLowerCase();
    while (outroDeletar === 's') {
      const id = this.entrada.recebeNumero('Código do serviço que quer excluir: ');
      this.deletarVerificado(empresa, id);

      outroDeletar = this.entrada
        .recebeTexto('Deseja excluir outro serviço? [s/n]')
        .toLowerCase();
    }

    console.log(
      `----------------------------------------------------------------`
    );
  }
}
