import { Component } from "react";
import "../styles/parcelas.css";

interface ParcelasProps {
  parcelas: any[];
  total: number;
}

export default class Parcelas extends Component<ParcelasProps> {
  formataData(data: Date): string {
    let novaData = new Date(data);
    return novaData.toLocaleDateString("pt-BR");
  }

  formataValor(valor: number): string {
    console.log(valor);
    return valor?.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  render() {
    return (
      <div className="container-parcelas">
        <p className="title">PROJEÇÃO DAS PARCELAS</p>
        <ul>
          {this.props.parcelas?.map((parcela: any, index: number) => {
            return (
              <li key={index}>
                <div className="parcela">
                  <div>{this.formataData(parcela.data)}</div>
                  <div>{this.formataValor(parcela.valor)}</div>
                </div>
                <hr />
              </li>
            );
          })}
          <div className="parcela">
            <span>TOTAL</span>
            <span>{this.formataValor(this.props.total)}</span>
          </div>
        </ul>
      </div>
    );
  }
}
