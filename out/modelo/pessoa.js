"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, nomeSocial, genero, nascimento, cpf, telefones) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.genero = genero;
        this.nascimento = nascimento;
        this.cpf = cpf;
        this.telefones = telefones;
    }
    Object.defineProperty(Pessoa.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Object.defineProperty(Pessoa.prototype, "getNomeSocial", {
        get: function () {
            return this.nomeSocial;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.setNomeSocial = function (nomeSocial) {
        this.nomeSocial = nomeSocial;
    };
    Object.defineProperty(Pessoa.prototype, "getGenero", {
        get: function () {
            return this.genero;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    Object.defineProperty(Pessoa.prototype, "getTelefones", {
        get: function () {
            return this.telefones;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.addTelefone = function (newTelefone) {
        this.telefones.push(newTelefone);
        return this.telefones;
    };
    Pessoa.prototype.removeTelefone = function (removedTelefone) {
        var uptadedTelefones = this.telefones.filter(function (telefone) {
            telefone.getDdd !== removedTelefone.getDdd &&
                telefone.getNumero !== removedTelefone.getNumero;
        });
        this.telefones = uptadedTelefones;
        return this.telefones;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
