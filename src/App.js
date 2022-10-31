import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Alejandro', lastName: 'Biedma'},
      company: 'Qoala'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, you work at {this.state.company}!
          </p>
          <button onClick={() => {
            this.setState({ name: {firstName: 'Jaf', lastName: 'Aguiar'} });
            console.log(this.state);
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
  
}

export default App;
