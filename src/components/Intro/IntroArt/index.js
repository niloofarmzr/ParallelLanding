import React from 'react'
import './index.css'
import Depth from '../../../assets/images/intro/art.png'
import Fill from '../../../assets/images/intro/art-fill.png'
import FloatingCircle from "../../UI/FloatingCircle";

const IntroArt = () => (
    <div className='intro-art'>
        <div className='intro-art__depth'>
            <img className='intro-art__depth__fill' src={Fill} alt=""/>
            <div className='intro-art__float-orbit'>
                <FloatingCircle className='intro-art__floating-circle'/>
            </div>
            <img src={Depth} alt=""/>
        </div>
    </div>
);

export default IntroArt;