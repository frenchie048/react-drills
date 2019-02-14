import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cheese: ['cheddar', 'swiss', 'brie', 'gruyere', 'mozzarella'],
      userInput: ""
    }
  }

  filterTheArray = (userInput) => {
    let unfilteredCheese = this.state.cheese;
    let filteredCheese = [];

    for (let i = 0; i < unfilteredCheese.length; i++) {
      if (unfilteredCheese[i].includes(userInput)) {
        filteredCheese.push(unfilteredCheese[i])
      }
    }
    this.setState({ cheese: filteredCheese })
  }

  render() {
    let displayCheese = this.state.cheese.map((value) => {
      return <h2>{[value]}</h2>
    })

    return (
      <div className="App">
        <input onChange={(e) => this.filterTheArray(e.target.value)}></input>
        {displayCheese}
      </div>
    );
  }
}

export default App;
