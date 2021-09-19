"use strict";
var express = require('./config/server');
var conexao = require('./config/db');
conexao.connect(function (err) {
    if (!err) {
        var app = express();
        app.listen(3000, function () { return console.log('Server running'); });
    }
    else {
        console.log(err);
    }
});
