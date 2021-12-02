import { Empresa } from '../modelo/empresa';

export abstract class Listar {
  public abstract listar(empresa: Empresa): void;
}
