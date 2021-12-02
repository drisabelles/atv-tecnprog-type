import { Empresa } from '../modelo/empresa';

export abstract class Atualizar {
  protected abstract atualizarVerificado(
    empresa: Empresa,
    cpf: number
  ): void;

  public abstract atualizar(clientCpf: number, empresa: Empresa): void;
}
