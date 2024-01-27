import React from 'react'
import Title from "../UI/Title";
import {teamMembers} from "../../constants/teamMembers";
import PersonnelCard from "./PersonnelCard";
import './index.css'
import ScrollBar from "./ScrollBar";

const isOdd = num => num % 2;

class TeamIntroduction extends React.Component{

    state = {
        scrollWidth: 0
    };

    componentDidMount() {
        const appWidth = document.getElementById('parent').offsetWidth;
        if(appWidth >= 768) {
            const scrollWidth = (teamMembers.length * 260 + (teamMembers.length * 50)) - document.getElementById('parent').offsetWidth;
            this.setState({scrollWidth});
            document.getElementById("slider").addEventListener("wheel", this.onMouseWheel);
        }
    }

    componentWillUnmount() {
        document.getElementById("slider").removeEventListener("wheel", this.onMouseWheel);
    }

    onMouseWheel = e => {
        if(e.deltaX > 0 || e.deltaX < 0) e.preventDefault()
    };

    handleScrollLeft = scrollLeftPercent => {
        const {scrollWidth} = this.state;
        this.slider.scrollLeft = (scrollLeftPercent * scrollWidth) / 100;
    };

    render() {
        return (
            <div id='parent' className='team-introduction'>
                <div className='content-max-width'>
                    <Title title='Our Team'/>
                </div>
                <div className='hide-xs-down'>
                    <div id='slider' ref={(slider) => { this.slider = slider }} className='team-introduction__slider-inner' >
                        {teamMembers.map((m, i) => <div key={m.id} className={isOdd(i) ? 'team-introduction__lower-slide' : ''}><PersonnelCard person={m}/></div>)}
                    </div>
                    <ScrollBar onScrolling={scrollLeft => this.handleScrollLeft(scrollLeft)}/>
                </div>
                <div className='hide-xs-up'>
                    {teamMembers.map((m, i) => <div key={m.id}><PersonnelCard person={m}/></div>)}
                </div>
            </div>
        )
    }
}

export default TeamIntroduction