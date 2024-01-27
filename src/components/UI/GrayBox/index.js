import React from 'react'
import './index.css'

const GrayBox = props => (
  <div className={`${props.variant === 'two' ? 'gray-box-2' : 'gray-box'} ${props.className}`}>
      {props.children}
  </div>
);

export default GrayBox