import { Component } from "react";
import Parcelas from "./Parcelas";
import "../styles/simulacao.css";
import api from "../services/api";

interface SimulacaoProps {
  simulacao: any;
}
export default class Simulacao extends Component<SimulacaoProps> {
  handleSubmit(event: any): void {
    event.preventDefault();
    api
      .post("/emprestimo", this.props.simulacao)
      .then((response) => console.log("aaaa", response))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <h5>Veja a simulação para o seu empréstimo antes de efetivar</h5>
        <div className="simulacao">
          <div className="container-simulacao">
            <div className="row-simulacao">
              <div className="card-simulacao">
                <span className="titulo-simulacao">VALOR REQUERIDO:</span>
                <span className="valor-simulacao">
                  R$ {this.props.simulacao?.valorInicial?.toFixed(2)}
                </span>
              </div>
              <div className="card-simulacao">
                <span className="titulo-simulacao">PAGAR EM:</span>
                <span className="valor-simulacao">
                  {this.props.simulacao?.parcelas.length} meses
                </span>
              </div>
            </div>

            <div className="row-simulacao">
              <div className="card-simulacao">
                <span className="titulo-simulacao">TAXA DE JUROS:</span>
                <span className="valor-simulacao">
                  {this.props.simulacao?.taxaJuros * 100}%
                </span>
              </div>
            </div>
          </div>

          <Parcelas
            parcelas={this.props.simulacao?.parcelas}
            total={this.props.simulacao?.total}
          />

          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="submit" value="EFETIVAR O EMPRÉSTIMO" id="efetuar" />
          </form>
        </div>
      </div>
    );
  }
}
