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
exports.AtualizarServico = void 0;
var entrada_1 = require("../../io/entrada");
var atualizar_1 = require("../atualizar");
var AtualizarServico = /** @class */ (function (_super) {
    __extends(AtualizarServico, _super);
    function AtualizarServico() {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.Entrada();
        return _this;
    }
    AtualizarServico.prototype.atualizarVerificado = function (empresa, id) {
        var _this = this;
        {
            var atualizarServicos_1 = [];
            empresa.getServicos.forEach(function (servico) {
                if (servico.id === id) {
                    servico.setName(_this.entrada.recebeTexto('Nome novo: '));
                    servico.setDescricao(_this.entrada.recebeTexto('Descrição nova: '));
                    servico.setPreco(_this.entrada.recebeNumero('Preço novo: '));
                }
                atualizarServicos_1.push(servico);
            });
            empresa.setServicos(atualizarServicos_1);
        }
    };
    AtualizarServico.prototype.atualizar = function (servicoId, empresa) {
        console.log('\nAtualização do cadastro do serviço -----------------------------');
        this.atualizarVerificado(empresa, servicoId);
        var outroAtualizar = this.entrada
            .recebeTexto('Deseja atualizar outro serviço? [s/n] ')
            .toLowerCase();
        while (outroAtualizar === 's') {
            var id = this.entrada.recebeNumero('Código do serviço que quer atualizar: ');
            this.atualizarVerificado(empresa, id);
            outroAtualizar = this.entrada
                .recebeTexto('Deseja atualizar outro serviço? [s/n]')
                .toLowerCase();
        }
    };
    return AtualizarServico;
}(atualizar_1.Atualizar));
exports.AtualizarServico = AtualizarServico;
