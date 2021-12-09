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
exports.CadastrarProduto = void 0;
var cadastrar_1 = require("../cadastrar");
var entrada_1 = require("../../io/entrada");
var produto_1 = require("../../modelo/produto");
var CadastrarProduto = /** @class */ (function (_super) {
    __extends(CadastrarProduto, _super);
    function CadastrarProduto() {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.Entrada();
        return _this;
    }
    CadastrarProduto.prototype.cadastrar = function (empresa) {
        console.log("\nCadastro de produto --------------------------------------------");
        var nome = this.entrada.recebeTexto('Nome: ').toLowerCase();
        var descricao = this.entrada.recebeTexto('Descrição: ').toLowerCase();
        var preco = this.entrada.recebeNumero('Preço: R$');
        var novoProduto = new produto_1.Produto(nome, descricao, preco);
        var produtos = empresa.getProdutos;
        produtos.push(novoProduto);
        empresa.setProdutos(produtos);
        console.log("\nCadastro conclu\u00EDdo com sucesso :)\n");
        console.log("----------------------------------------------------------------");
    };
    return CadastrarProduto;
}(cadastrar_1.Cadastrar));
exports.CadastrarProduto = CadastrarProduto;
