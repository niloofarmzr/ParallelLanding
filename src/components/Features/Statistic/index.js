import React from 'react'
import TextBox from "../../UI/TextBox";
import Arrow from '../../../assets/images/features/Arrow.png';
import './index.css'

const Statistic = () => (
    <div className='statistic'>
        <TextBox variant='two' className='statistic__box'>
            <div className='row padding-5'>
                <div className='col-sm-7 hide-xs-down'>
                    <div className='statistic__figure__border-wrap'>
                        <div className='statistic__figure'>
                            <img src={Arrow} alt=""/>
                            <span>
                            20.83%
                        </span>
                        </div>
                    </div>
                </div>
                <div className='col-xs-12 col-sm-5'>
                    <div className='statistic__text'>
                        interest to earn
                    </div>
                </div>
                <div className='col-xs-12 hide-xs-up'>
                    <div className='statistic__figure__border-wrap'>
                        <div className='statistic__figure'>
                            <img src={Arrow} alt=""/>
                            <span>
                            20.83%
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </TextBox>
    </div>
);

export default Statistic;