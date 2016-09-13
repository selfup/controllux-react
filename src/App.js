import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick = () => {
    this.props.app.counter.send('UP', 1)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.app.counter.appState.get('number')}</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.handleClick}>Number (+ 1)</button>
        </p>
      </div>
    );
  }
}

export default App;
