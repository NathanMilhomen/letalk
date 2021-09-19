import { request, response, Router } from "express";
import EmprestimoController from "./controllers/EmprestimoController";

const routes = Router();
routes.post('/simular', EmprestimoController.calculate);
routes.post('/emprestimo', EmprestimoController.create);
routes.get('/emprestimo', EmprestimoController.index);

export default routes;