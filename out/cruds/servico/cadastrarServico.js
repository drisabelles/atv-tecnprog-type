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
exports.CadastrarServico = void 0;
var cadastrar_1 = require("../cadastrar");
var entrada_1 = require("../../io/entrada");
var servico_1 = require("../../modelo/servico");
var CadastrarServico = /** @class */ (function (_super) {
    __extends(CadastrarServico, _super);
    function CadastrarServico() {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.Entrada();
        return _this;
    }
    CadastrarServico.prototype.cadastrar = function (empresa) {
        console.log('\nCadastro de produto --------------------------------------------');
        var name = this.entrada.recebeTexto('Nome: ').toLowerCase();
        var descricao = this.entrada.recebeTexto('Descrição: ').toLowerCase();
        var preco = this.entrada.recebeNumero('Preço: R$');
        var novoServico = new servico_1.Servico(name, descricao, preco);
        var servicos = empresa.getServicos;
        servicos.push(novoServico);
        empresa.setServicos(servicos);
        console.log('\nCadastro concluído com sucesso :)\n');
        console.log('----------------------------------------------------------------');
    };
    return CadastrarServico;
}(cadastrar_1.Cadastrar));
exports.CadastrarServico = CadastrarServico;
