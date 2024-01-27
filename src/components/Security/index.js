import React from 'react'
import Title from "../UI/Title";
import {security} from "../../constants/security";
import SecurityCard from "./SecurityCard";
import './index.css'

const Security = () => (
    <div className='security'>
        <Title title='Audited and Secured' secondTitle='by the best in the industry'/>
        <div className='row'>
            {security.map(s => <div key={s.id} className={`col-xs-6 col-sm-4 margin-top-20 ${s.type === 'image' ? 'security__image-card' : ''}`}>{s.type === 'card' ?
                <SecurityCard info={s}/> :
                <img className='security__image' src={s.icon} alt=""/>}</div>)}
        </div>
    </div>
);
export default Security