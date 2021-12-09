"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletarCliente = void 0;
var deletar_1 = require("../deletar");
var entrada_1 = require("../../io/entrada");
var DeletarCliente = /** @class */ (function (_super) {
    __extends(DeletarCliente, _super);
    function DeletarCliente() {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.Entrada();
        return _this;
    }
    DeletarCliente.prototype.deletarVerificado = function (empresa, cpf) {
        var clienteDeletar;
        empresa.getClientes.map(function (cliente) {
            if (cliente.cpf === cpf) {
                clienteDeletar = cliente;
            }
        });
        var confirmacao = this.entrada
            .recebeTexto('Quer mesmo excluir o cliente de CPF: ${clientToDelete.cpf}? [s/n]')
            .toLowerCase();
        if (confirmacao === 's') {
            var atualizarClientes_1 = [];
            empresa.getClientes.map(function (cliente) {
                if (cliente.cpf !== cpf) {
                    atualizarClientes_1.push(cliente);
                }
            });
            empresa.setClientes(atualizarClientes_1);
            console.log('\nExclusão realizada com sucesso! :)');
            console.log('----------------------------------------------------------------');
        }
        else {
            console.log('\nTarefa interrompida!');
            console.log('----------------------------------------------------------------');
        }
    };
    DeletarCliente.prototype.deletar = function (clientCpf, empresa) {
        console.log('\nExclusão do cliente ---------------------------------------------');
        this.deletarVerificado(empresa, clientCpf);
        var outroDeletar = this.entrada
            .recebeTexto('Deseja excluir outro cliente? [s/n]')
            .toLowerCase();
        while (outroDeletar === 's') {
            var cpf = this.entrada.recebeNumero('CPF que quer excluir: ');
            this.deletarVerificado(empresa, cpf);
            outroDeletar = this.entrada
                .recebeTexto('Deseja excluir outro cliente? [s/n]')
                .toLowerCase();
        }
        console.log('----------------------------------------------------------------');
    };
    return DeletarCliente;
}(deletar_1.Deletar));
exports.DeletarCliente = DeletarCliente;
