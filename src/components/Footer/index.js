import React from 'react'
import './index.css'
import GrayBox from "../UI/GrayBox";
import Email from "./Email";
import FooterItems from "./FooterItems";

const Footer = () => (
    <div className='footer content-max-width'>
        <GrayBox className='footer__gray-box' variant='two'>
            <div className='row'>
                <div className='col-sm-6 col-md-4 hide-xs-down'>
                    <FooterItems/>
                </div>
                <div className='col-xs-12 col-sm-6 col-md-8'>
                    <div className='footer__in-touch'>
                        <h2>Get in Touch</h2>
                        <p>
                            If you are a large token holder or validator, we’d love to partner with you and build together.
                        </p>
                        <Email/>
                    </div>
                </div>
                <div className='col-xs-12 hide-xs-up'>
                    <FooterItems/>
                </div>
            </div>
        </GrayBox>
    </div>
);

export default Footer