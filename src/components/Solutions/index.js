import React from 'react'
import {solutions} from "../../constants/solutions";
import SolutionCard from "./SolutionCard";
import './index.css'
import TextBox from "../UI/TextBox";
import Title from "../UI/Title";

const Solutions = () => (
    <div className='solutions'>
        <Title title='A solution for everyone'/>
        <div className='solutions__solution-cards row '>
            {solutions.map(s => <div key={s.id} className='solutions__solution-card col-xl-4'><SolutionCard solution={s}/></div>)}
        </div>
        <TextBox variant='two' className='solutions__desc-box'>
            <h4 className='solutions__desc-title'>
                WHAT IF YOUR STAKED TOKENS CAN ALSO BE USED ELSEWHERE?
            </h4>
            <div className='solutions__desc'>
                We unlock the liquidity for your staked tokens, which can be used to lend, trade or as payment.
            </div>
        </TextBox>
    </div>
);

export default Solutions;