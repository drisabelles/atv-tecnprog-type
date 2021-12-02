import { Empresa } from '../modelo/empresa';

export abstract class Cadastrar {
  public abstract cadastrar(empresa: Empresa): void;
}
