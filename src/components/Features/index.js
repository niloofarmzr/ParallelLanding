import React from 'react'
import Title from "../UI/Title";
import {features} from "../../constants/features";
import GradientButton from "../UI/Buttons/GradientButton";
import './index.css'
import Statistics from "./Statistic";

const Features = () => (
    <div className='features'>
        <Title title='Strong. Inclusive. Modular.'/>
        <div className=' row'>
            <div className='col-xs-12 col-lg-6'>
                <Statistics/>
            </div>
            <div className='col-xs-12 col-lg-6'>
                <div className="row features__buttons">
                    {features.map((f, i) => <div key={f} className={`col-xs-12 col-sm-4 ${i > 0 ? 'margin-top-40-xs' : 'margin-top-20-xs'}`}>
                        <GradientButton width='90%' ><div className='features__button'>{f}</div></GradientButton>
                    </div>)}
                </div>
            </div>
        </div>
    </div>
);

export default Features