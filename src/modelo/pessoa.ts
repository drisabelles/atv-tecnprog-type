import { Telefone } from './telefone';

export class Pessoa {
  public nome: string;
  public nomeSocial: string;
  public genero: string;
  readonly nascimento: Date;
  readonly cpf: number;
  public telefones: Telefone[];

  constructor(
    nome: string,
    nomeSocial: string,
    genero: string,
    nascimento: Date,
    cpf: number,
    telefones: Telefone[]
  ) {
    this.nome = nome;
    this.nomeSocial = nomeSocial;
    this.genero = genero;
    this.nascimento = nascimento;
    this.cpf = cpf;
    this.telefones = telefones;
  }

  public get getNome(): string {
    return this.nome;
  }
  public setNome(nome: string) {
    this.nome = nome;
  }

  public get getNomeSocial(): string {
    return this.nomeSocial;
  }
  public setNomeSocial(nomeSocial: string) {
    this.nomeSocial = nomeSocial;
  }
 
  public get getGenero(): string {
    return this.genero;
  }
  public setGenero(genero: string) {
    this.genero = genero;
  }
  
  public get getTelefones(): Telefone[] {
    return this.telefones;
  }
  public addTelefone(newTelefone: Telefone): Telefone[] {
    this.telefones.push(newTelefone);
    return this.telefones;
  }
  public removeTelefone(removedTelefone: Telefone): Telefone[] {
    const uptadedTelefones = this.telefones.filter(telefone => {
      telefone.getDdd !== removedTelefone.getDdd &&
        telefone.getNumero !== removedTelefone.getNumero;
    });
    this.telefones = uptadedTelefones;
    return this.telefones;
  }
}
