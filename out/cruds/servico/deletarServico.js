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
exports.DeletarServico = void 0;
var deletar_1 = require("../deletar");
var entrada_1 = require("../../io/entrada");
var DeletarServico = /** @class */ (function (_super) {
    __extends(DeletarServico, _super);
    function DeletarServico() {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.Entrada();
        return _this;
    }
    DeletarServico.prototype.deletar = function (empresa, id) {
        var servicoDeletar;
        empresa.getServicos.map(function (servico) {
            if (servico.id === id) {
                servicoDeletar = servico;
            }
        });
        var confirmation = this.entrada
            .recebeTexto('Quer mesmo deletar o serviço ${serviceToDelete.getName}? [s/n]')
            .toLowerCase();
        if (confirmacao === 's') {
            var atualizarServicos_1 = [];
            empresa.getServicos.map(function (servico) {
                if (servico.id !== id) {
                    atualizarServicos_1.push(servico);
                }
            });
            empresa.setServicos(atualizarServicos_1);
            console.log('\nExcluído com sucesso! :)');
            console.log('----------------------------------------------------------------');
        }
        else {
            console.log('\nTarefa interrompida!');
            console.log('----------------------------------------------------------------');
        }
    };
    DeletarServico.prototype.deletar = function (servicoId, empresa) {
        console.log('\nExclusão de serviço ---------------------------------------------');
        this.deletarVerificado(empresa, servicoId);
        var outroDeletar = this.entrada
            .recebeTexto('Deseja excluir outro serviço? [s/n]')
            .toLowerCase();
        while (outroDeletar === 's') {
            var id = this.entrada.recebeNumero('Código do serviço que quer excluir: ');
            this.deletarVerificado(empresa, id);
            outroDeletar = this.entrada
                .recebeTexto('Deseja excluir mais algum serviço? [s/n]')
                .toLowerCase();
        }
        console.log("----------------------------------------------------------------");
    };
    return DeletarServico;
}(deletar_1.Deletar));
exports.DeletarServico = DeletarServico;
