"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entrada = void 0;
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Entrada = /** @class */ (function () {
    function Entrada() {
    }
    Entrada.prototype.recebeNumero = function (mensage) {
        var prompt = (0, prompt_sync_1.default)();
        var value = new Number(prompt(mensage));
        return value.valueOf();
    };
    Entrada.prototype.recebeTexto = function (mensage) {
        var prompt = (0, prompt_sync_1.default)();
        return prompt(mensage);
    };
    return Entrada;
}());
exports.Entrada = Entrada;
