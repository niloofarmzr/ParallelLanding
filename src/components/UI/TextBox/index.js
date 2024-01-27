import React from 'react'
import './index.css'

const TextBox = props => (
    <div className={`${props.variant === 'two' ? 'pressed-text-box-2' : props.variant === 'three' ? 'pressed-text-box-3' : 'pressed-text-box'} ${props.className}`}>
        {props.children}
    </div>
);

export default TextBox;