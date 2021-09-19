"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import routes from "./routes";
var consign = require('consign');
var bodyParser = require('body-parser');
module.exports = function () {
    var app = (0, express_1.default)();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    consign()
        .include('controllers')
        .into(app);
    return app;
};
