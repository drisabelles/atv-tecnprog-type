import { Cliente } from '../../modelo/cliente';
import { Entrada } from '../../io/entrada';
import { Telefone } from '../../modelo/telefone';
import { Empresa } from '../../modelo/empresa';
import { Atualizar } from '../atualizar';

export class AtualizarCliente extends Atualizar {
  public entrada: Entrada;

  constructor() {
    super();
    this.entrada = new Entrada();
  }

  protected atualizarVerificado(empresa: Empresa, cpf: number) {
    const updatedClients: Cliente[] = [];
    empresa.getClientes.forEach(cliente => {
      if (cliente.cpf === cpf) {
        cliente.setNome(this.entrada.recebeTexto('Novo nome: '));
        cliente.setNomeSocial(this.entrada.recebeTexto('Novo nome: '));
        cliente.setGenero(this.entrada.recebeTexto('Novo gênero: '));

        const atualizarTelefones = this.entrada
          .recebeTexto('Quer atualizar algum telefone? [s/n] ')
          .toLowerCase();

        if (atualizarTelefones === 's') {
          console.log(
            'Se não desejar alterar, repita o já existente.'
          );
          const telefones = cliente.getTelefones;

          for (let i: number = 0; i < cliente.getTelefones.length; i++) {
            const novoDDD = this.entrada.recebeNumero(
            `DDD antigo: ${telefones[i].getDdd}. Novo: `
            );
            const novoNumero = this.entrada.recebeNumero(
              `Número antigo: ${telefones[i].getNumero}. Novo: `
            );

            cliente.deletarTelefone(telefones[i]);
            cliente.adicionarTelefone(new Telefone(novoDDD, novoNumero));
          }

        }

        let outroTelefone = this.entrada
          .recebeTexto('Algum novo telefone? [s/n] ')
          .toLowerCase();
        if (outroTelefone === 's') {
          const novoDDD = this.entrada.recebeNumero('DDD: ');
          const novoNumero = this.entrada.recebeNumero('Número: ');

          cliente.adicionarTelefone(new Telefone(novoDDD, novoNumero));

          outroTelefone = this.entrada
            .recebeTexto('Algum novo telefone? [s/n] ')
            .toLowerCase();
        }
      }
      updatedClients.push(cliente);
    });
    empresa.setClientes(atualizarClientes);
  }

  public update(clienteCPF: number, empresa: Empresa): void {
    console.log(
      '\nAtualização cadastro do cliente -----------------------------'
    );
    this.atualizarVerificado(empresa, clienteCPF);

    let outroAtualizar = this.entrada
      .recebeTexto('Deseja atualizar outro cliente? [s/n] ')
      .toLowerCase();
    while (outroAtualizar === 's') {
      const cpf = this.entrada.recebeNumero('CPF novo: ');
      this.atualizarVerificado(empresa, cpf);

      outroAtualizar = this.entrada
        .recebeTexto('Deseja atualizar outro cliente? [s/n] ')
        .toLowerCase();
    }

    console.log(
      '----------------------------------------------------------------'
    );
  }
}
