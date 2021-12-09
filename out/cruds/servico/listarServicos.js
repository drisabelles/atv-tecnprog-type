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
exports.ListarServicos = void 0;
var listar_1 = require("../listar");
var ListarServicos = /** @class */ (function (_super) {
    __extends(ListarServicos, _super);
    function ListarServicos() {
        return _super.call(this) || this;
    }
    ListarServicos.prototype.list = function (empresa) {
        console.log('\nLista dos serviços existentes -------------------------------------');
        var servicos = empresa.getServicos;
        servicos.forEach(function (servico) {
            console.log("\n      C\u00F3digo: ".concat(servico.id, "\n      Nome: ").concat(servico.getNome, "\n      Pre\u00E7o: R$ ").concat(servico.getPreco, "\n      -------------------------------------------\n      "));
        });
        console.log("\n----------------------------------------------------------------");
    };
    return ListarServicos;
}(listar_1.Listar));
exports.ListarServicos = ListarServicos;
