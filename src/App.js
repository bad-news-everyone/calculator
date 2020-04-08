import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { History } from './components/History';

export let myHistory = ['2+2=4']; 

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      input: "0",
      history: [],
      firstNumber: '',
      secondNumber: '',
      sign: '',
    }
    
    this.addToInput = this.addToInput.bind(this);
  }


  addToInput = val => {
    switch (val) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '+':
      case '-':
      case '*':
      case '/':
        if (this.state.input === "0") {
          this.setState({
            input: val
          }); 
        } else {
          this.setState({
            input: this.state.input + val,
          });
        }
        break;

      case '=':
        this.setState((state, props) => ({
          input: eval(state.input),
          history: state.input + '=' + eval(state.input),
          
        }));
       
        myHistory.push(this.state.history + ' ');
        alert(myHistory);
        break;

      case 'C':
        this.setState({
          input: '0'
        })
        break;
    }
  }

  render() {
    return (
      <div className='app'>
        <div className='wrapper'>
          <Input input={
            this.state.input
          } />
          <Button clickOnButton={
            this.addToInput
          } />
          <History history={
            myHistory
          } />
        </div>
      </div>
    );
  }
}

export default App;