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
exports.AtualizarCliente = void 0;
var entrada_1 = require("../../io/entrada");
var telefone_1 = require("../../modelo/telefone");
var atualizar_1 = require("../atualizar");
var AtualizarCliente = /** @class */ (function (_super) {
    __extends(AtualizarCliente, _super);
    function AtualizarCliente() {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.Entrada();
        return _this;
    }
    AtualizarCliente.prototype.atualizarVerificado = function (empresa, cpf) {
        var _this = this;
        var updatedClients = [];
        empresa.getClientes.forEach(function (cliente) {
            if (cliente.cpf === cpf) {
                cliente.setNome(_this.entrada.recebeTexto('Novo nome: '));
                cliente.setNomeSocial(_this.entrada.recebeTexto('Novo nome: '));
                cliente.setGenero(_this.entrada.recebeTexto('Novo gênero: '));
                var atualizarTelefones = _this.entrada
                    .recebeTexto('Quer atualizar algum telefone? [s/n] ')
                    .toLowerCase();
                if (atualizarTelefones === 's') {
                    console.log('Se não desejar alterar, repita o já existente.');
                    var telefones = cliente.getTelefones;
                    for (var i = 0; i < cliente.getTelefones.length; i++) {
                        var novoDDD = _this.entrada.recebeNumero("DDD antigo: ".concat(telefones[i].getDdd, ". Novo: "));
                        var novoNumero = _this.entrada.recebeNumero("N\u00FAmero antigo: ".concat(telefones[i].getNumero, ". Novo: "));
                        cliente.deletarTelefone(telefones[i]);
                        cliente.adicionarTelefone(new telefone_1.Telefone(novoDDD, novoNumero));
                    }
                }
                var outroTelefone = _this.entrada
                    .recebeTexto('Algum novo telefone? [s/n] ')
                    .toLowerCase();
                if (outroTelefone === 's') {
                    var novoDDD = _this.entrada.recebeNumero('DDD: ');
                    var novoNumero = _this.entrada.recebeNumero('Número: ');
                    cliente.adicionarTelefone(new telefone_1.Telefone(novoDDD, novoNumero));
                    outroTelefone = _this.entrada
                        .recebeTexto('Algum novo telefone? [s/n] ')
                        .toLowerCase();
                }
            }
            updatedClients.push(cliente);
        });
        empresa.setClientes(atualizarClientes);
    };
    AtualizarCliente.prototype.update = function (clienteCPF, empresa) {
        console.log('\nAtualização cadastro do cliente -----------------------------');
        this.atualizarVerificado(empresa, clienteCPF);
        var outroAtualizar = this.entrada
            .recebeTexto('Deseja atualizar outro cliente? [s/n] ')
            .toLowerCase();
        while (outroAtualizar === 's') {
            var cpf = this.entrada.recebeNumero('CPF novo: ');
            this.atualizarVerificado(empresa, cpf);
            outroAtualizar = this.entrada
                .recebeTexto('Deseja atualizar outro cliente? [s/n] ')
                .toLowerCase();
        }
        console.log('----------------------------------------------------------------');
    };
    return AtualizarCliente;
}(atualizar_1.Atualizar));
exports.AtualizarCliente = AtualizarCliente;
