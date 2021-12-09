"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servico = void 0;
var Servico = /** @class */ (function () {
    function Servico(nome, descricao, preco) {
        this.id = Math.random();
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }
    Object.defineProperty(Servico.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Servico.prototype.setName = function (nome) {
        this.nome = nome;
    };
    Object.defineProperty(Servico.prototype, "getDescricao", {
        get: function () {
            return this.descricao;
        },
        enumerable: false,
        configurable: true
    });
    Servico.prototype.setDescricao = function (descricao) {
        this.descricao = descricao;
    };
    Object.defineProperty(Servico.prototype, "getPreco", {
        get: function () {
            return this.preco;
        },
        enumerable: false,
        configurable: true
    });
    Servico.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    return Servico;
}());
exports.Servico = Servico;
