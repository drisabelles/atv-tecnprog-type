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
exports.CadastrarCliente = void 0;
var cadastrar_1 = require("../cadastrar");
var entrada_1 = require("../../io/entrada");
var telefone_1 = require("../../modelo/telefone");
var CadastrarCliente = /** @class */ (function (_super) {
    __extends(CadastrarCliente, _super);
    function CadastrarCliente() {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.Entrada();
        return _this;
    }
    CadastrarCliente.prototype.cadastrar = function (empresa) {
        console.log("\nCadastro de cliente --------------------------------------------");
        var nome = this.entrada.recebeTexto('Nome: ');
        var nomeSocial = this.entrada.recebeTexto('Nome Social (caso não tenha deixe em branco): ');
        var genero = this.entrada.recebeTexto('Gênero: ');
        var nascimento = new Date(this.entrada.recebeTexto('Data de nascimento (modelo dd/mm/yyyy): '));
        var cpf = this.entrada.recebeNumero('CPF: ');
        var ddd = this.entrada.recebeNumero('DDD: ');
        var numero = this.entrada.recebeNumero('Número: ');
        var telefones = [];
        telefones.push(new telefone_1.Telefone(ddd, numero));
        var outroTelefone = this.entrada.recebeTexto('Mais algum? [s/n] ').toLowerCase();
        while (outroTelefone === 's') {
            ddd = this.entrada.recebeNumero('DDD: ');
            numero = this.entrada.recebeNumero('Número: ');
            telefones.push(new telefone_1.Telefone(ddd, numero));
            outroTelefone = this.entrada.recebeTexto('Mais algum? [s/n] ').toLowerCase();
        }
        var clientes = empresa.getClientes;
        clientes.push(novoCliente);
        empresa.setClientes(clientes);
        console.log("\nCadastro conclu\u00EDdo com sucesso :)\n");
        console.log("----------------------------------------------------------------");
    };
    return CadastrarCliente;
}(cadastrar_1.Cadastrar));
exports.CadastrarCliente = CadastrarCliente;
