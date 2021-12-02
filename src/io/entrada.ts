import promptSync from 'prompt-sync';

export class Entrada {
  public recebeNumero(mensage: string): number {
    const prompt = promptSync();
    const value = new Number(prompt(mensage));
    return value.valueOf();
  }

  public recebeTexto(mensage: string): string {
    const prompt = promptSync();
    return prompt(mensage);
  }
}
