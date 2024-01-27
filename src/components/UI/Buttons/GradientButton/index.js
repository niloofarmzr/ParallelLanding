import React from 'react'
import './index.css'



const GradientButton = props => (
    <a href={props.href} onClick={props.onClick ? props.onClick : null}>
        <div className='gradient-button__container' style={props.fullWidth ? {width: '100%', margin: '0 auto'} : props.width ? {width: props.width, margin: '0 auto'} : {}}>
            <div className='gradient-button__border-wrap'>
                <div className='gradient-button'>
                    <div className='gradient-button__transparent-title'>
                        {props.children}
                    </div>
                </div>
            </div>
            <div className='gradient-button__title'>
                {props.children}
            </div>
        </div>
    </a>

);

export default GradientButton;
