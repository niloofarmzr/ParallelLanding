import React from 'react'
import './index.css'

const Title = props => (
    <div className='title' style={props.noGutterBottom ? {margin: 0} : {}}>
        {props.title}
        {props.secondTitle ? <div className='second-title'>{props.secondTitle}</div> : null}
    </div>
);

export default Title