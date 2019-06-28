import React from 'react'
import Layout from '../components/layout'
import { Tween, Timeline } from 'react-gsap'
import { TweenMax, Power2, TimelineMax } from "gsap/TweenMax";

import '../assets/css/mystyles.css'

class HomePage extends React.Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.myElTitle = null;
    this.myElTitle2 = null;
    // reference to the animation
    this.myTwTimeline = new TimelineMax({paused: true}).bind(this);
  }

  componentDidMount(){
    // use the node ref to create the animation
    // this.myTwTitle = TweenLite.to(this.myElTitle, 1, {x: 100, y: 100});
    myTwTimeline
      .to(this.myElTitle, 1, {x: 100, y: 100})
      .to(this.myElTitle2, 1, {x: 100, y: 100})
      .play()
  }

  render() {
    return (
      <div>
        <h1 ref={div => this.myElTitle = div}>Seth</h1>
        <h1 ref={div => this.myElTitle2 = div}>Industries</h1>
        <Timeline
          target={
            <p className="title-text">Seth Industries</p>
          }
        >
          <Tween duration={4} />
          <Tween duration={3} from={{ opacity: 0 }} to={{ opacity: 1 }} />
        </Timeline>
        <Timeline
          target={
            <div className="splitter-rect" />
          }
        >
          <Tween duration={2} from={{ height: "0px" }} to={{ height: "1000px" }} />
          <Tween duration={2} from={{ width: "2px" }} to={{ width: "1000px" }} />
        </Timeline>

      </div>
    )
  }
}

export default HomePage
