import React from 'react';
import './History.css';

export class History extends React.Component {
    render() {
        return (
            <div className='history'>
                History of actions: 
                {this.props.history}
                
            </div>
        );
    }
} 