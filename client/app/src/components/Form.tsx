import { Component } from "react";
import FormProps from "../interfaces/FormProps";
import api from "../services/api";
import "../styles/form.css";

export default class Form extends Component<FormProps> {
  simulacao: any;

  constructor(props: FormProps) {
    super(props);

    this.state = {
      cpf: "",
      uf: "",
      dataNascimento: "",
      valor: 0,
      quantidadeParcelas: 0,
    };
  }

  handleSubmit(event: any) {
    event.preventDefault();
    api
      .post("/simular", this.state)
      .then((response) => {
        this.props.getSimulacao(response.data);
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <h1>Simule e solicite o seu empréstimo.</h1>
        <h6>Preencha o formulário abaixo para simular</h6>
        <div className="fields">
          <form
            className="simulate-form"
            onSubmit={this.handleSubmit.bind(this)}
          >
            <input
              type="text"
              placeholder="CPF"
              name="cpf"
              onChange={(e) => this.setState({ cpf: e.target.value })}
            />
            <input
              type="text"
              placeholder="UF"
              name="uf"
              onChange={(e) => this.setState({ uf: e.target.value })}
            />
            <input
              type="text"
              placeholder="DATA DE NACIMENTO"
              name="dataNascimento"
              onChange={(e) =>
                this.setState({ dataNascimento: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="VALOR REQUERIDO"
              name="valor"
              onChange={(e) =>
                this.setState({ valor: parseInt(e.target.value) })
              }
            />
            <input
              type="text"
              placeholder="MESES PARA PAGAR"
              name="parcelas"
              onChange={(e) =>
                this.setState({ quantidadeParcelas: parseInt(e.target.value) })
              }
            />

            <input type="submit" value="SIMULAR" id="simular" />
          </form>
        </div>
      </div>
    );
  }
}
