import React from 'react'
import TextBox from "../../UI/TextBox";
import './index.css'

const SecurityCard = props => (
    <TextBox variant='three' className='security-card'>
        <img style={{maxWidth: props.info.width, width: '100%'}} className='security-card__icon' src={props.info.icon} alt=""/>
        <div className='security-card__title'>
            {props.info.title}
        </div>
    </TextBox>

);

export default SecurityCard