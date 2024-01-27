import React from 'react'
import ParallelLogo from "../../UI/ParallelLogo";
import About from "../../Header/MenuItems/About";
import Docs from "../../Header/MenuItems/Docs";
import SocialMedia from "./SocialMedia";
import './index.css'

const FooterItems = () => (
    <div>
        <ParallelLogo/>
        <div className='footer__items'>
            <div className='footer__item'>
                <About/>
            </div>
            <div className='footer__item'>
                <Docs/>
            </div>
        </div>
        <div className='footer__social-media'>
            <SocialMedia/>
        </div>
    </div>
);
export default FooterItems