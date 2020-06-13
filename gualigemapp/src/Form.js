import React, { Component } from 'react';
import { postRobot } from './fetchApi'
export default class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      response: '',
      boldResponse: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });


  }

  async handleSubmit(event) {
    let r1 = ""
    let r2 = ""
    event.preventDefault();
    if(this.state.value === ""){
      r1 = "Conteúdo está vazio"
      r2 = "Não tem como conversar sem falar nada né 🤷‍♂️"
    }else {
      
      this.setState({ boldResponse: 'Enviando mensagem... ⏳', response: '' })
      const aux = await postRobot(this.state.value)
      
      if (aux == "") {
        r1 = "Não foi possível identificar a intenção 😓"
        r2 = "Não se preocupe, ele aprende rápido, logo vocês vão conseguir conversar 🤗"
      }else {
        r1 = "O robo respondeu:"
        r2 = aux
      }
    }
    this.setState({ boldResponse: r1 });
    this.setState({ response: r2 })
    this.setState({ value: '' })
  }

  render() {
    return (
      <div>
        <form >
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button class="button" value={this.state.response}
            onClick={this.handleSubmit}>Mandar para o robo 🤖 </button>
        </form>
        <div class="responseDiv">
          <h1>{this.state.boldResponse}</h1>
          <h3>{this.state.response}</h3>
        </div>

      </div>
    );
  }
}