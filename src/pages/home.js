import React from 'react'
import Layout from '../components/layout'
import { Tween, Timeline } from 'react-gsap'
import { TweenMax, Power2, TimelineMax } from "gsap/TweenMax";

import '../assets/css/mystyles.css'

class HomePage extends React.Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.myElSplitterRect = null;
    this.myElIcon = null;
    this.myElTitle = null;
    this.myElTitle2 = null;
    // reference to the animation
    this.myTwTimeline = new TimelineMax({paused: true})
  }

  componentDidMount(){
    // use the node ref to create the animation
    // this.myTwTitle = TweenLite.to(this.myElTitle, 1, {x: 100, y: 100});
    this.myTwTimeline
      .fromTo(this.myElSplitterRect, 1, {height: "0px"}, {height: "1000px"})
      .fromTo(this.myElSplitterRect, 1, {width: "0.3%"}, {width: "100%"})
      .fromTo(this.myElIcon, 1.3, {x: 60, opacity: 0}, {x: 0, opacity: 1})
      .staggerFromTo([
          this.myElTitle,
          this.myElTitle2
        ], 1, {y: -20, opacity: 0}, {y: 0, opacity: 1}, 0.5
      )
      .play()
  }

  render() {
    return (
      <div>
        <div className="splitter-rect" ref={div => this.myElSplitterRect = div}>
          <div className="inner-content">
            <img
              ref={div => this.myElIcon = div}
              className="icon"
              src={require('./../images/icon.svg')}
              />
              <div className="title-content">
                <h1 className="title" ref={div => this.myElTitle = div}>Seth</h1>
                <h1 className="title" ref={div => this.myElTitle2 = div}>Industries</h1>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
