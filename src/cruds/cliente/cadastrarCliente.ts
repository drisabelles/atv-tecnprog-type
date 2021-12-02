import { Cliente } from '../../modelo/cliente';
import { Cadastrar } from '../cadastrar';
import { Entrada } from '../../io/entrada';
import { Telefone } from '../../modelo/telefone';
import { Empresa } from '../../modelo/empresa';

export class CadastrarCliente extends Cadastrar {
  private entrada: Entrada;

  constructor() {
    super();
    this.entrada = new Entrada();
  }

  public cadastrar(empresa: Empresa): void {
    console.log(
      `\nCadastro de cliente --------------------------------------------`
    );

    const nome = this.entrada.recebeTexto('Nome: ');
    const nomeSocial = this.entrada.recebeTexto('Nome Social (caso não tenha deixe em branco): ');
    const genero = this.entrada.recebeTexto('Gênero: ');
    const nascimento = new Date(this.entrada.recebeTexto('Data de nascimento (modelo dd/mm/yyyy): '));
    const cpf = this.entrada.recebeNumero('CPF: ');

    let ddd = this.entrada.recebeNumero('DDD: ');
    let numero = this.entrada.recebeNumero('Número: ');
    let telefones: Telefone[] = [];
    telefones.push(new Telefone(ddd, numero));

    let outroTelefone = this.entrada.recebeTexto('Mais algum? [s/n] ').toLowerCase();
    while (outroTelefone === 's') {
      ddd = this.entrada.recebeNumero('DDD: ');
      numero = this.entrada.recebeNumero('Número: ');
      telefones.push(new Telefone(ddd, numero));

      outroTelefone = this.entrada.recebeTexto('Mais algum? [s/n] ').toLowerCase();
    }

      const clientes = empresa.getClientes;
      clientes.push(novoCliente);
      empresa.setClientes(clientes);

    console.log(`\nCadastro concluído com sucesso :)\n`);
    console.log(
      `----------------------------------------------------------------`
    );
  }
}
