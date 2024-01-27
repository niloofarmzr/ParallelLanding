import React from 'react'
import BlurryButton from "../UI/Buttons/BlurryButton";
import './index.css'
import {blurryButtonOptions} from "../../constants/blurryButtonOptions";
import IntroArt from "./IntroArt";
import FloatingCircle from "../UI/FloatingCircle";

const Intro = () => (
    <div className='intro'>
        <IntroArt/>
        <div className='intro__desc'>
            <FloatingCircle diameter='96px' className='intro__floating-circle intro__floating-circle-1'/>
            <FloatingCircle diameter='40px' className='intro__floating-circle intro__floating-circle-2'/>
            <FloatingCircle diameter='150px' className='intro__floating-circle intro__floating-circle-3'/>
            <div className='intro__blurry-shape'/>

            <div className='intro__title'>
                Decentralized bank that earns while you sleep
            </div>
            <BlurryButton>
                {blurryButtonOptions.map(o => <div key={o}>{o}</div>)}
            </BlurryButton>
        </div>
    </div>
);

export default Intro;