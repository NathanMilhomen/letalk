import { Request, Response } from "express";
import Cliente from "../models/Cliente";
import Parcela from "../models/Parcela";
import Simulacao from "../models/Simulacao";


export default {
    async index(request: Request, response: Response) {
        console.log("aaaaaaaaaa")
        let simulacao = await Simulacao.find();
        return response.send(simulacao);
    },
    async calculate(request: Request, response: Response) {
        const {
            cpf,
            uf,
            dataNascimento,
            valor,
            quantidadeParcelas
        } = request.body;

        
        const cliente: Cliente = new Cliente(cpf, uf, dataNascimento);
        const simulacao: Simulacao = new Simulacao(cliente, valor, quantidadeParcelas);
        simulacao.calcularParcelas();

        return response.send(simulacao);

    },

    async create(request: Request, response: Response) {
        // Recebendo parametros
        const simulacao: Simulacao = request.body;
        console.log(simulacao);
        await Parcela.save(simulacao.parcelas);
        await Simulacao.save(simulacao);
        response.send().status(200);

    }

};