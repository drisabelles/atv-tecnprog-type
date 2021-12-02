import { Pessoa } from './pessoa';
import { Telefone } from './telefone';

export class Cliente extends Pessoa {
  readonly cadastro: Date;

  constructor(
    nome: string,
    nomeSocial: string,
    genero: string,
    nascimento: Date,
    cpf: number,
    telefones: Telefone[]
  ) {
    super(nome, nomeSocial, genero, nascimento, cpf, telefones);

    this.cadastro = new Date();
  }
}
