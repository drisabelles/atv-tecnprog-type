"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(nome, descricao, preco) {
        this.id = Math.random();
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }
    Object.defineProperty(Produto.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Object.defineProperty(Produto.prototype, "getDescricao", {
        get: function () {
            return this.descricao;
        },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.setDescricao = function (descricao) {
        this.descricao = descricao;
    };
    Object.defineProperty(Produto.prototype, "getPreco", {
        get: function () {
            return this.preco;
        },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    return Produto;
}());
exports.Produto = Produto;
