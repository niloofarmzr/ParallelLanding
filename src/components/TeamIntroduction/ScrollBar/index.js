import React from 'react'
import './index.css'

class ScrollBar extends React.Component {
    positionHandle = (e) => {
        const appWidth = document.getElementById('app').offsetWidth;
        const windowWidth = window.innerWidth;
        let pageX = e.pageX;
        if(windowWidth > appWidth) {
            pageX = e.pageX - ((windowWidth - appWidth) / 2)
        }
        let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
        let newMargLeft = pageX - this.timeline.offsetLeft - (this.handle.offsetWidth / 2);

        if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
            this.handle.style.marginLeft = newMargLeft + "px";
            this.props.onScrolling(Math.round(newMargLeft * 100 / timelineWidth));
        }
        if (newMargLeft < 0) {
            this.handle.style.marginLeft = "0px";
            this.props.onScrolling(0)
        }
        if (newMargLeft > timelineWidth) {
            this.handle.style.marginLeft = timelineWidth + "px";
            this.props.onScrolling(100)
        }
    };

    mouseUp = (e) => {
        window.removeEventListener('mousemove', this.positionHandle);
        window.removeEventListener('mouseup', this.mouseUp);
    };

    mouseDown = (e) => {
        window.addEventListener('mousemove', this.positionHandle);
        window.addEventListener('mouseup', this.mouseUp);
    };

    render() {
        return <>
            <div id="timeline" onClick={this.positionHandle} ref={(timeline) => { this.timeline = timeline }}>
                <div id="handle"
                     onMouseDown={this.mouseDown}
                     ref={(handle) => { this.handle = handle }} />
            </div>
        </>
    }
}

export default ScrollBar