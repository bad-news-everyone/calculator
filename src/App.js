import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val })
  };


  render() {
    return (
      <div className='app'>
        <div className='wrapper'>
          <Input input={this.state.input} />
          <div className='row'>
            <button onClick={() => this.addToInput('7')}>7</button>
            <button onClick={() => this.addToInput('8')}>8</button>
            <button onClick={() => this.addToInput('9')}>9</button>
            <button onClick={() => this.addToInput('*')}>*</button>
          </div>
          <div className='row'>
            <button onClick={() => this.addToInput('4')}>4</button>
            <button onClick={() => this.addToInput('5')}>5</button>
            <button onClick={() => this.addToInput('6')}>6</button>
            <button onClick={() => this.addToInput('-')}>-</button>
          </div>
          <div className='row'>
            <button onClick={() => this.addToInput('1')}>1</button>
            <button onClick={() => this.addToInput('2')}>2</button>
            <button onClick={() => this.addToInput('3')}>3</button>
            <button onClick={() => this.addToInput('+')}>+</button>
          </div>
          <div className='row'>
            <button>C</button>
            <button onClick={() => this.addToInput('0')}>0</button>
            <button onClick={() => this.addToInput('/')}>/</button>
            <button onClick={() => this.addToInput('=')}>=</button>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
