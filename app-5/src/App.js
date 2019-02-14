import React, { Component } from 'react';
import Image from './Image';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image img={'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Shiba-Inu-2.jpg'} />
      </div>
    );
  }
}

export default App;
