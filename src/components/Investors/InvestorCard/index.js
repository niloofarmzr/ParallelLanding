import React from 'react'
import TextBox from "../../UI/TextBox";
import './index.css'

const InvestorCard = props => (
    <TextBox variant='two' className='investor-card'>
        <img style={{maxWidth: props.width, width: '100%'}} className='investor-card__icon' src={props.icon} alt=""/>
    </TextBox>

);

export default InvestorCard