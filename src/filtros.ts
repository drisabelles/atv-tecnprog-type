import { Pedido } from "./modelo/pedido";
import { Cliente } from "./modelo/cliente";
import { Produto } from "./modelo/produto";
import { Servico } from "./modelo/servico";
import { Empresa } from "./modelo/empresa";
import { Entrada } from "./io/entrada";

export class Filtros {
    private entrada: Entrada;
    private listarClientes: Array<Cliente>;
  
    constructor(empresa: Empresa) {
      this.entrada = new Entrada();
      this.listarClientes = empresa.clientes;
    }

public getClientesMAIScons(): void {
    const report: Array<{ nome: string; consumidor: number }> =
      this.listarClientes.map((cliente) => {
        let contarServEProd = 0;
        cliente.pedidos.forEach((pedido) => {
          pedido.listarProdutos?.forEach(() => contarServEProd++);
          pedido.listarServicos?.forEach(() => contarServEProd++);
        });
        return { nome: cliente.nome, consumidor: contarServEProd };
      });

    const compara = (a, b) => {
      if (a.consumidor > b.consumidor) return -1;
      if (a.consumidor < b.consumidor) return 1;
      return 0;
    };
    report.sort(compara);
    const maisCons = report.slice(0, 10);
    console.log("10 clientes que mais consumiram\n");
    maisCons.forEach((cliente, index) => {
      console.log(`${index + 1} - ${cliente.nome}, Consumo: ${cliente.consumidor}`);
    });
    console.log();
  }

  public getClientesMENOScons(): void {
    const report: Array<{ nome: string; consumidor: number }> =
      this.listarClientes.map((cliente) => {
        let contarServEProd = 0;
        cliente.pedidos.forEach((pedido) => {
          pedido.listarProdutos?.forEach(() => contarServEProd++);
          pedido.listarServicos?.forEach(() => contarServEProd++);
        });
        return { nome: cliente.nome, consumidor: contarServEProd };
      });

    const compara = (a, b) => {
      if (a.consumidor < b.consumidor) return -1;
      if (a.consumidor > b.consumidor) return 1;
      return 0;
    };
    report.sort(compara);
    const menosCons = report.slice(0, 10);
    console.log("10 clientes que menos consumiram\n");
    menosCons.forEach((cliente, index) => {
      console.log(`${index + 1} - ${cliente.nome}, Consumo: ${cliente.consumidor}`);
    });
    console.log();
  }

  public getClientesGASTO(): void {
    const format = {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
    };

    const report: Array<{ nome: string; valorConsumido: number }> =
      this.listarClientes.map((cliente) => {
        let valorServProdConsumido = 0;
        cliente.pedidos.forEach((pedido) => {
          valorServProdConsumido += pedido.valor_pedido;
        });
        return {
          nome: cliente.nome,
          valorConsumido: valorServProdConsumido,
        };
      });

    const compara = (a, b) => {
      if (a.valorConsumido > b.valorConsumido) return -1;
      if (a.valorConsumido < b.valorConsumido) return 1;
      return 0;
    };
    report.sort(compara);
    const valorcons = report.slice(0, 5);
    console.log("10 clientes que mais gastaram\n");
    valorcons.forEach((cliente, index) => {
      console.log(
        `${index + 1} - ${
          cliente.nome
        }, Valor Total: ${cliente.valorConsumido.toLocaleString("pt-BR", format)}`
      );
    });
    console.log();
  }

  public getClientesGENERO(): void {
    const listarClientes = this.listarClientes;
    const compara = (a, b) => {
      if (a.genero > b.genero) return -1;
      if (a.genero < b.genero) return 1;
      return 0;
    };
    listarClientes.sort(compara);

    console.log("Clientes listados por gênero\n");
    listarClientes.forEach((cliente) => {
      console.log(
        `Nome: ${cliente.nome}, Sexo: ${cliente.genero} - CPF: ${cliente.getCPF()}`
      );
    });
    console.log();
  }

  public getProdServMAIS(): void {
    const produtosMAIScons: Array<{
      id: number;
      nome: string;
      unidade: number;
    }> = [];

    const servicosMAIScons: Array<{
      id: number;
      nome: string;
      unidade: number;
    }> = [];

    const insereLista = (listarItem, id, nome, unidade) => {
      const achaItem = (item) => item.id === id;

      let acharItem = listarItem.achar(achaItem);
      if (acharItem !== undefined) {
        acharItem.unidade = acharItem.unidade += unidade;
      } else {
        listarItem.push({ id: id, nome: nome, unidade: unidade });
      }
      return;
    };

    this.listarClientes.forEach((cliente) => {
      cliente.pedidos.forEach((pedido) => {
        pedido.listarProdutos?.forEach((produto) => {
          insereLista(
            produtosMAIScons,
            produto.produto.id,
            produto.produto.nome,
            produto.unidade
          );
        });

        pedido.listarServicos?.forEach((servico) => {
          insereLista(
            servicosMAIScons,
            servico.servico.id,
            servico.servico.nome,
            servico.unidade
          );
        });
      });
    });

    const compara = (a, b) => {
      if (a.unidade > b.unidade) return -1;
      if (a.unidade < b.unidade) return 1;
      return 0;
    };

    produtosMAIScons.sort(compara);
    servicosMAIScons.sort(compara);

    console.log("Produtos mais consumidos\n");
    produtosMAIScons.forEach((produto) => {
      console.log(`Produto: ${produto.nome}, quantidade: ${produto.unidade}`);
    });
    console.log();
    console.log("Serviços mais consumidos\n");
    servicosMAIScons.forEach((servico) => {
      console.log(`Serviço: ${servico.nome}, quantidade: ${servico.unidade}`);
    });
    console.log();
  }

  public getprodutosAndservicosPerGender(): void {
    const prodMAISconsMASC: Array<{
      id: number;
      nome: string;
      unidade: number;
    }> = [];
    const prodMAISconsFEM: Array<{
      id: number;
      nome: string;
      unidade: number;
    }> = [];

    const servMAISconsMASC: Array<{
      id: number;
      nome: string;
      unidade: number;
    }> = [];
    const servMAISconsFEM: Array<{
      id: number;
      nome: string;
      unidade: number;
    }> = [];

    const insereLista = (listarItem, id, nome, unidade) => {
      const achaItem = (item) => item.id === id;

      let acharItem = listarItem.find(achaItem);
      if (acharItem !== undefined) {
        acharItem.unidade = acharItem.unidade += unidade;
      } else {
        listarItem.push({ id: id, nome: nome, unidade: unidade });
      }
      return;
    };

    this.listarClientes.forEach((cliente) => {
      cliente.pedidos.forEach((pedido) => {
        pedido.listarProdutos?.forEach((produto) => {
          if (cliente.genero === "Masculino") {
            insereLista(
                prodMAISconsMASC,
                produto.produto.id,
                produto.produto.nome,
                produto.unidade
            );
          } else {
            insereLista(
                prodMAISconsFEM,
                produto.produto.id,
                produto.produto.nome,
                produto.unidade
            );
          }
        });

        pedido.listarServicos?.forEach((servico) => {
          if (cliente.genero === "Masculino") {
            insereLista(
                servMAISconsMASC,
                servico.servico.id,
                servico.servico.nome,
                servico.unidade
            );
          } else {
            insereLista(
                servMAISconsFEM,
                servico.servico.id,
                servico.servico.nome,
                servico.unidade
            );
          }
        });
      });
    });

    const compara = (a, b) => {
      if (a.unidade > b.unidade) return -1;
      if (a.unidade < b.unidade) return 1;
      return 0;
    };

    prodMAISconsMASC.sort(compara);
    prodMAISconsFEM.sort(compara);
    servMAISconsMASC.sort(compara);
    servMAISconsFEM.sort(compara);

    console.log("Produtos mais consumidos pelo gênero masculino\n");
    prodMAISconsMASC.forEach((produto) => {
      console.log(`Produto: ${produto.nome}, quantidade: ${produto.unidade}`);
    });
    console.log();
    console.log("Produtos mais consumidos pelo gênero feminino\n");
    prodMAISconsFEM.forEach((produto) => {
      console.log(`Produto: ${produto.nome}, quantidade: ${produto.unidade}`);
    });
    console.log();
    console.log("Serviços mais consumidos pelo gênero masculino\n");
    servMAISconsMASC.forEach((servico) => {
      console.log(`Serviço: ${servico.nome}, quantidade: ${servico.unidade}`);
    });
    console.log();
    console.log("Serviços mais consumidos pelo gênero feminino\n");
    servMAISconsFEM.forEach((servico) => {
      console.log(`Serviço: ${servico.nome}, quantidade: ${servico.unidade}`);
    });
    console.log();
  }
}
