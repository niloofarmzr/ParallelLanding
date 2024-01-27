import React from 'react'
import GrayBox from "../../UI/GrayBox";
import IconHolder from "../../UI/IconHolder";
import './index.css'

const SolutionCard =  props => (
    <GrayBox className='solution-card'>
        <IconHolder png className='margin-0-auto' icon={props.solution.icon} diameter='146px'/>
        <h4>
            {props.solution.title}
        </h4>
        <div className='solution-card__text'>
            {props.solution.text}
        </div>
    </GrayBox>
);

export default SolutionCard