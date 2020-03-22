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
   render() {
  return (
    <div className='app'>
    <div className='wrapper'>
      <Input />
      <div className='row'>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
      </div>
      <div className='row'>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
      </div>
      <div className='row'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>
      <div className='row'>
        <button>C</button>
        <button>0</button>
        <button>/</button>
        <button>=</button>
      </div>
    </div>
    </div>
  );
   }
}


export default App;
