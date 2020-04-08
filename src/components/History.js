import React from 'react';
import './History.css';
import { myHistory } from '../App';

export class History extends React.Component {
    render() {
        return (
            <div className='history'>
                History of actions: 
                { myHistory }
                
            </div>
        );
    }
} 