import React from 'react'
import './index.css'
import Shine from "../UI/Shine";
import Title from "../UI/Title";

const Advantages = () => (
    <div className='advantages flex-vertical-center'>
        <Shine className='advantages__shine'/>
        <Shine className='advantages__shine-2'/>
        <div className='content-max-width'>
            <div className='row advantages__row'>
                <div className='col-xs-12 col-md-6 col-lg-6 col-xl-5 advantages__polkadot'>
                    <Title title='Polkadot' noGutterBottom/>
                    <div className='advantages__text'>
                        Faster
                        <br/>
                        Cheaper
                        <br/>
                        Interoperable
                    </div>
                </div>
                <div className='col-xs-12 col-md-6 col-lg-6 col-xl-5'>
                    <div className='advantages__ethereum'>
                        <Title title='Ethereum' noGutterBottom/>
                        <div className='advantages__text'>
                            High transactions fees are only affordable by the wealthy.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Advantages;