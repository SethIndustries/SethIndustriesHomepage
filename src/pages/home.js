import React from 'react'
import Layout from '../components/layout'
import { Tween, Timeline } from 'react-gsap'
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

import '../assets/css/mystyles.css'

class HomePage extends React.Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.myElTitle = null;
    // reference to the animation
    this.myTwTitle = null;
  }

  componentDidMount(){
    // use the node ref to create the animation
    // this.myTwTitle = TweenLite.to(this.myElTitle, 1, {x: 100, y: 100});
    TweenMax.to(this.myElTitle, 1, {x: 100, y: 100});
  }

  render() {
    return (
      <div>
        <h1 ref={div => this.myElTitle = div}>Get around me</h1>
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
