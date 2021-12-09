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
exports.AtualizarProduto = void 0;
var entrada_1 = require("../../io/entrada");
var atualizar_1 = require("../atualizar");
var AtualizarProduto = /** @class */ (function (_super) {
    __extends(AtualizarProduto, _super);
    function AtualizarProduto() {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.Entrada();
        return _this;
    }
    AtualizarProduto.prototype.atualizarVerificado = function (empresa, id) {
        var _this = this;
        var atualizarProdutos = [];
        empresa.getProdutos.forEach(function (produto) {
            if (produto.id === id) {
                produto.setNome(_this.entrada.recebeTexto('Nome novo: '));
                produto.setDescricao(_this.entrada.recebeTexto('Descrição nova: '));
                produto.setPreco(_this.entrada.recebeNumero('Preço novo: '));
            }
            atualizarProdutos.push(produto);
        });
        empresa.setProdutos(atualizarProdutos);
    };
    AtualizarProduto.prototype.atualizar = function (productId, empresa) {
        console.log("\nAtualiza\u00E7\u00E3o de cadastro de produto -----------------------------");
        this.atualizarVerificado(empresa, productId);
        var outraAtualizacao = this.entrada
            .recebeTexto('Deseja atualizar mais algum produto? [s/n] ')
            .toLowerCase();
        while (outraAtualizacao === 's') {
            var id = this.entrada.recebeNumero('Digite o código que quer atualizar: ');
            this.atualizarVerificado(empresa, id);
            outraAtualizacao = this.entrada
                .recebeTexto('Deseja atualizar mais algum produto? [s/n] ')
                .toLowerCase();
        }
        console.log("----------------------------------------------------------------");
    };
    return AtualizarProduto;
}(atualizar_1.Atualizar));
exports.AtualizarProduto = AtualizarProduto;
