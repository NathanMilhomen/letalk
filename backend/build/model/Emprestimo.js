"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Emprestimo = /** @class */ (function () {
    function Emprestimo(cliente, valorInicial, montante, jurosMensais, quantidadeParcelas) {
        switch (cliente.uf) {
            case 'MG':
                jurosMensais = 1 / 100;
                break;
            case 'SP':
                jurosMensais = 0.8 / 100;
                break;
            case 'RJ':
                jurosMensais = 0.9 / 100;
                break;
            case 'ES':
                jurosMensais = 1.11 / 100;
                break;
        }
        montante = valorInicial * Math.pow((1 + jurosMensais), quantidadeParcelas);
    }
    return Emprestimo;
}());
exports.default = Emprestimo;
