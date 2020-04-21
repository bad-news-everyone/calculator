import React from 'react';
import './History.css';

export function History(props) {
        return (
            <div className='history'>
                History of actions:
               {props.history}
            </div>
        )
}