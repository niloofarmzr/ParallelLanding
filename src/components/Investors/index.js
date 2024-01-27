import React from 'react'
import Title from "../UI/Title";
import {investors} from "../../constants/investors";
import InvestorCard from "./InvestorCard";
import './index.css'

const Investors = () => (
    <div className='investors'>
        <Title title='Backed by top investors'/>
        <div className='row'>
            {investors.map(i => <div key={i.id} className='col-xs-6 col-sm-4 margin-top-20'><InvestorCard width={i.width} icon={i.icon}/></div>)}
        </div>
    </div>
);

export default Investors