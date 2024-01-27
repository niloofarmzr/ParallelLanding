import React from 'react'
import './index.css'

const IconHolder = props => {
    const Icon = props.icon;
    return (
        <div className={`icon-holder__border-wrap ${props.className} ${props.scaleClass}`} style={props.diameter ? {width: props.diameter, height: props.diameter} : {}}>
            <div className={`icon-holder ${props.scaleClass}`} style={props.diameter ? {width: props.diameter, height: props.diameter} : {}}>
                {props.png ? <img src={Icon} alt=""/> : <Icon/>}
            </div>
        </div>
    )
};

export default IconHolder;