"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var conexao = mysql_1.default.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'letalk',
    password: ''
});
exports.default = conexao;
