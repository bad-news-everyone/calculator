import React from 'react';
import './Button.css'

export class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    addToInput = (event) => {
        this.props.clickOnButton(event.target.value)
    }

    render() {
        return (
            <div className='app'>
                <div className='btn-wrapper'>
                    
                    <div className='row'>
                        <button onClick={this.addToInput} value='7'>7</button>
                        <button onClick={this.addToInput} value='8'>8</button>
                        <button onClick={this.addToInput} value='9'>9</button>
                        <button onClick={this.addToInput} value='*'>*</button>
                    </div>
                    <div className='row'>
                        <button onClick={this.addToInput} value='4'>4</button>
                        <button onClick={this.addToInput} value='5'>5</button>
                        <button onClick={this.addToInput} value='6'>6</button>
                        <button onClick={this.addToInput} value='-'>-</button>
                    </div>
                    <div className='row'>
                        <button onClick={this.addToInput} value='1'>1</button>
                        <button onClick={this.addToInput} value='2'>2</button>
                        <button onClick={this.addToInput} value='3'>3</button>
                        <button onClick={this.addToInput} value='+'>+</button>
                    </div>
                    <div className='row'>
                        <button onClick={this.addToInput} value='C'>C</button>
                        <button onClick={this.addToInput} value='0'>0</button>
                        <button onClick={this.addToInput} value='/'>/</button>
                        <button className='equally' onClick={this.addToInput} value='='>=</button>
                    </div>
                </div>
            </div>
        );
    }
}

