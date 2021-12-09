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
exports.ListarClientes = void 0;
var listar_1 = require("../listar");
var ListarClientes = /** @class */ (function (_super) {
    __extends(ListarClientes, _super);
    function ListarClientes() {
        return _super.call(this) || this;
    }
    ListarClientes.prototype.listar = function (empresa) {
        console.log('\nLista dos clientes existentes -------------------------------------');
        var clientes = empresa.getClientes;
        clientes.forEach(function (cliente) {
            console.log('Nome: ' + cliente.nome);
            console.log('Nome social' + cliente.nomeSocial);
            console.log('CPF: ' + cliente.cpf);
            console.log('-------------------------------------------');
        });
        console.log('\n----------------------------------------------------------------');
    };
    return ListarClientes;
}(listar_1.Listar));
exports.ListarClientes = ListarClientes;
