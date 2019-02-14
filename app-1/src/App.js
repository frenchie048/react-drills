import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    }
    this.updateOutput = this.updateOutput.bind(this)
  }

  updateOutput(value) {
    this.setState({
      text: value
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.updateOutput(e.target.value)}></input>
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}

export default App;
