import { Listar } from '../listar';
import { Empresa } from '../../modelo/empresa';

export class ListarClientes extends Listar {
  constructor() {
    super();
  }

  public listar(empresa: Empresa): void {
    console.log(
      '\nLista dos clientes existentes -------------------------------------'
    );

    const clientes = empresa.getClientes;
    clientes.forEach(cliente => {
      console.log('Nome: ' + cliente.nome);
      console.log('Nome social' + cliente.nomeSocial);
      console.log('CPF: ' + cliente.cpf);

      console.log('-------------------------------------------');
    });

    console.log(
      '\n----------------------------------------------------------------'
    );
  }
}
