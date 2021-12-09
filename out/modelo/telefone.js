"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefone = void 0;
var Telefone = /** @class */ (function () {
    function Telefone(ddd, number) {
        this.ddd = ddd;
        this.numero = number;
    }
    Object.defineProperty(Telefone.prototype, "getDdd", {
        //get e set ddd
        get: function () {
            return this.ddd;
        },
        enumerable: false,
        configurable: true
    });
    Telefone.prototype.setDdd = function (ddd) {
        this.ddd = ddd;
    };
    Object.defineProperty(Telefone.prototype, "getNumero", {
        //get e set numero
        get: function () {
            return this.numero;
        },
        enumerable: false,
        configurable: true
    });
    Telefone.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    return Telefone;
}());
exports.Telefone = Telefone;
