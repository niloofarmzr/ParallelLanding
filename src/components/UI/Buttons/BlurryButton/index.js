import React from 'react'
import './index.css'

const BlurryButton = props => (
    <div className='blurry-button__container'>
        <div className='blurry-button__border-wrap'>
            <div className='blurry-button'>
                <div className='blurry-button__title'>
                    {props.children}
                </div>
            </div>
        </div>

    </div>
);

export default BlurryButton;
