import React from 'react';
import './Input.css';

export class Input extends React.Component {
render() {
    return(
<div className='input'>
    {this.props.input}
</div>
    );
}
} 