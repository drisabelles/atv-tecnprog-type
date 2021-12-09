"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(nome, clientes, produtos, servicos) {
        this.nome = nome;
        if (clientes !== undefined &&
            produtos !== undefined &&
            servicos !== undefined &&
        ) {
            this.clientes = clientes;
            this.produtos = produtos;
            this.servicos = servicos;
        }
    }
    Object.defineProperty(Empresa.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Object.defineProperty(Empresa.prototype, "getClientes", {
        get: function () {
            return this.clientes || [];
        },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.setClientes = function (clientes) {
        this.clientes = clientes;
    };
    Object.defineProperty(Empresa.prototype, "getProdutos", {
        get: function () {
            return this.produtos || [];
        },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.setProdutos = function (produtos) {
        this.produtos = produtos;
    };
    Object.defineProperty(Empresa.prototype, "getServicos", {
        get: function () {
            return this.servicos || [];
        },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.setServicos = function (servicos) {
        this.servicos = servicos;
    };
    return Empresa;
}());
exports.Empresa = Empresa;
