import { Deletar } from '../deletar';
import { Entrada } from '../../io/entrada';
import { Empresa } from '../../modelo/empresa';
import { Cliente } from '../../modelo/cliente';

export class DeletarCliente extends Deletar {
  public entrada: Entrada;

  constructor() {
    super();
    this.entrada = new Entrada();
  }

  protected deletarVerificado(empresa: Empresa, cpf: number){
    let clienteDeletar;
    empresa.getClientes.map(cliente => {
      if (cliente.cpf === cpf) {
        clienteDeletar = cliente;
      }
    });

    let confirmacao = this.entrada
      .recebeTexto(
        'Quer mesmo excluir o cliente de CPF: ${clientToDelete.cpf}? [s/n]'
      )
      .toLowerCase();

    if (confirmacao === 's') {
      let atualizarClientes: Cliente[] = [];
      empresa.getClientes.map(cliente => {
        if (cliente.cpf !== cpf) {
          atualizarClientes.push(cliente);
        }
      });
      empresa.setClientes(atualizarClientes);

      console.log('\nExclusão realizada com sucesso! :)');
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

  public deletar(clientCpf: number, empresa: Empresa): void {
    console.log(
      '\nExclusão do cliente ---------------------------------------------'
    );
    this.deletarVerificado(empresa, clientCpf);

    let outroDeletar = this.entrada
      .recebeTexto('Deseja excluir outro cliente? [s/n]')
      .toLowerCase();
    while (outroDeletar === 's') {
      const cpf = this.entrada.recebeNumero('CPF que quer excluir: ');
      this.deletarVerificado(empresa, cpf);

      outroDeletar = this.entrada
        .recebeTexto('Deseja excluir outro cliente? [s/n]')
        .toLowerCase();
    }

    console.log(
      '----------------------------------------------------------------'
    );
  }
}
