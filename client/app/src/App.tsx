import { Component } from "react";
import Form from "./components/Form";
import Simulacao from "./components/Simulacao";
import "./styles/app.css";
export default class App extends Component {
  simulacao: any;

  constructor(props: any) {
    super(props);
    this.state = {
      simulacao: {},
    };
  }

  getSimulacao(simulacao: any) {
    this.simulacao = simulacao;
    this.setState({ simulacao: this.simulacao });
  }

  render() {
    return (
      <main>
        <Form getSimulacao={this.getSimulacao.bind(this)} />
        <Simulacao simulacao={this.simulacao} />
      </main>
    );
  }
}
