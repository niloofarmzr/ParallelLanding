import React from 'react'
import './index.css'

const PersonnelCard = props => (
    <div className='personnel-card'>
        <div>
            <div className='personnel-card__picture'>
                <img src={props.person.picture} alt=""/>
            </div>
            <div className='personnel-card__name'>
                {props.person.name}
            </div>
            <div className='personnel-card__background'>
                {props.person.background.map(b => <div key={b}><div className='circle'/>{b}</div>)}
            </div>
        </div>
    </div>
);

export default PersonnelCard