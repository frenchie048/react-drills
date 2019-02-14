import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cheese: ['cheddar', 'swiss', 'brie', 'gruyere', 'mozzarella']
    }
  }

  render() {
    let displayCheese = this.state.cheese.map((value) => {
      return <h2>{[value]}</h2>
    })

    return (
      <div className="App">
        {displayCheese}
      </div>
    );
  }
}

export default App;
