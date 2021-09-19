"use strict";
module.exports = function (app) {
    app.get('/emprestimo', function (request, response) { return response.send("Olá"); });
};
