import React from 'react'
import './index.css'

const FloatingCircle = props => <div  style={props.diameter ? {width: props.diameter, height: props.diameter} : {}} className={`floating-circle ${props.className}`}/>;
export default FloatingCircle;