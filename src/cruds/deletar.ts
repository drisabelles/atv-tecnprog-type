import { Empresa } from '../modelo/empresa';

export abstract class Deletar {
  protected abstract deletarVerificado(
    empresa: Empresa,
    cpf: number
  ): void;

  public abstract deletar(id: number, empresa: Empresa): void;
}
