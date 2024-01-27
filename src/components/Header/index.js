import React from 'react'
import './index.css'
import GradientButton from "../UI/Buttons/GradientButton";
import ParallelLogo from "../UI/ParallelLogo";
import About from "./MenuItems/About";
import Docs from "./MenuItems/Docs";
import {ReactComponent as Menu} from '../../assets/images/header/Menu.svg';
import IconHolder from "../UI/IconHolder";

const Header = () => (
    <div className='header'>
        <div className='header__desktop'>
            <div className='header__items'>
                <div className='header__item logo'>
                    <ParallelLogo/>
                </div>
                <div className='header__item'>
                    <About/>
                </div>
                <div className='header__item'>
                    <Docs/>
                </div>
            </div>
            <div className='header__action'>
                <GradientButton href='/app'>
                    App
                </GradientButton>
            </div>
        </div>
        <div className='header__mobile'>
            <div className='header__items'>
                <div className='header__item logo'>
                    <ParallelLogo/>
                </div>
                <div className='header__item'>
                    <IconHolder diameter='32px' icon={Menu}/>
                </div>
            </div>
        </div>
    </div>
);

export default Header;