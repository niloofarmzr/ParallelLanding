import React from 'react'
import IconHolder from "../../UI/IconHolder";
import TextBox from "../../UI/TextBox";
import './index.css'

const Fact = props => (
    <div className='fact row flex-center margin-top-20'>
        <div className='fact__icon col-xs-2 col-sm-1 col-lg-2'>
            <IconHolder scaleClass='fact__icon__scale' icon={props.icon} />
        </div>
        <div className='fact__text col-xs-10 col-sm-11 col-lg-10'>
            <TextBox className='fact__text-box'>
                <div className='fact__text-box__text'>
                    {props.text}
                </div>
            </TextBox>
        </div>
    </div>
);

export default Fact;