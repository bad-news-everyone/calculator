
import React from 'react';
import { Input } from './components/Input.js';
import { History } from './components/History.js';
import './App.css';
import './components/Button.css';

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
      history: [],
    }
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  }

  clearInput() {
    this.setState({
      input: ''
    })
  }

  clearHistory() {
    this.setState({
      history: ''
    })
  }


  equally() {
    const newHistory = this.state.history.slice();
    try {
      this.setState({
        input: eval(this.state.input),
        history: [...newHistory, (this.state.input + '=' + eval(this.state.input) + ', ')],
      })
    } catch (err) {
      this.setState({
        input: 'Syntax Error',
        history: [],
      })
    }
  }

  render() {
    return (
      <div className='app'>
        <div className='wrapper'>
          <div className='screen'>
            <Input input={this.state.input} />
          </div>
          <div className='btn-wrapper'>

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
              <button onClick={() => this.clearInput('C')}>C</button>
              <button onClick={() => this.addToInput('0')}>0</button>
              <button onClick={() => this.addToInput('/')}>/</button>
              <button onClick={() => this.addToInput('.')}>.</button>
            </div>
            <div className='row'>
              <button className='equally' onClick={() => this.equally('=')}>=</button>
            </div>
          </div>
          <History history={this.state.history} />
          <button onClick={() => this.clearHistory()}>Clear History</button>
        </div>
      </div>
    );
  }
}