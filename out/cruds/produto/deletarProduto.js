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
exports.DeletarProduto = void 0;
var deletar_1 = require("../deletar");
var entrada_1 = require("../../io/entrada");
var DeletarProduto = /** @class */ (function (_super) {
    __extends(DeletarProduto, _super);
    function DeletarProduto() {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.Entrada();
        return _this;
    }
    DeletarProduto.prototype.deletarVerificado = function (empresa, id) {
        var produtoDeletar;
        empresa.getProdutos.map(function (produto) {
            if (produto.id === id) {
                produtoDeletar = produto;
            }
        });
        var confirmacao = this.entrada
            .recebeTexto('Quer mesmo exlcuir o produto ${produtoDeletar.getNome}? [s/n]')
            .toLowerCase();
        if (confirmacao === 's') {
            var atualizarProdutos_1 = [];
            empresa.getProdutos.map(function (produto) {
                if (produto.id !== id) {
                    atualizarProdutos_1.push(produto);
                }
            });
            empresa.setProdutos(atualizarProdutos_1);
            console.log('\nProduto excluído com sucesso! :)');
            console.log('----------------------------------------------------------------');
        }
        else {
            console.log("\nTarefa interrompida!");
            console.log('----------------------------------------------------------------');
        }
    };
    DeletarProduto.prototype.deletar = function (productId, empresa) {
        console.log("\nExclus\u00E3o do produto ---------------------------------------------");
        this.deletarVerificado(empresa, productId);
        var outroDeletar = this.entrada
            .recebeTexto('Deseja excluir outro produto? [s/n] ')
            .toLowerCase();
        while (outroDeletar === 's') {
            var id = this.entrada.recebeNumero('Código do produto que quer excluir: ');
            this.deletarVerificado(empresa, id);
            outroDeletar = this.entrada
                .recebeTexto('Deseja excluir outro produto? [s/n] ')
                .toLowerCase();
        }
        console.log("----------------------------------------------------------------");
    };
    return DeletarProduto;
}(deletar_1.Deletar));
exports.DeletarProduto = DeletarProduto;
