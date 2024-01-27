import React from 'react'
import './index.css'
import {facts} from "../../constants/facts";
import Earth from '../../assets/images/facts/Earth.png';
import Fact from "./Fact";

const Facts = () => (
    <div className='facts'>
        <div className='row'>
            <div className='facts__art col-xs-12  col-lg-7 col-xl-6'>
                <div className='facts__art__svg'>
                    <img src={Earth} alt=""/>
                </div>
            </div>
            <div className='col-xs-12 col-lg-5 col-xl-6'>
                <div className='facts__fact-holder'>
                    {facts.map(f => <Fact key={f.id} icon={f.icon} text={f.text}/>)}
                </div>
                <div className='facts__desc'>
                    Most of the people receive low interests on their savings and don’t participate in the financial market - costing them the opportunity to buid their wealth over time.
                </div>
            </div>
        </div>
    </div>
);

export default Facts