import React from 'react'
import './index.css'
import MediaIcon from "../../../UI/MediaIcon";
import {socialMedia} from "../../../../constants/socialMedia";

const SocialMedia = () => (
    <div className='social-media'>
        {socialMedia.map(s => <div key={s.id}><MediaIcon icon={s.icon}/></div>)}

    </div>
);

export default SocialMedia;