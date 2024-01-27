import React from 'react'
import Title from "../UI/Title";
import './index.css'
import Empowerment from '../../assets/images/financial-empowerment/Empowerment.png'
import Shine from "../UI/Shine";

const FinancialEmpowerment = () => (
    <div className='financial-empowerment'>
        <img src={Empowerment} alt=""/>
        <div className='financial-empowerment__desc'>
            <Title title='Financial Empowerment'/>
            <div className='financial-empowerment__text'>
                <p>
                    We believe that no one should be left out of the financial economy because the cost for not participating in the financial market is too great in an highly inflated market. We aim to build a suite of intuitive financial tools to empower and enrich people who don’t have the means or knowledge  to benefit from the modern and decentralized way of growing their wealth.
                </p>
                <br/>
                <p>
                    We are empowering the common people to earn interests on their assets through intuitive lending, staking and other applications. - allowing everyone to participate in the future financial ecosystem
                </p>
            </div>
        </div>
        <Shine className='financial-empowerment__shine'/>
        <Shine className='financial-empowerment__shine-2'/>
    </div>
);
export default FinancialEmpowerment