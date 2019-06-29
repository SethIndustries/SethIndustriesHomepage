import React, { useState, useRef, useEffect } from 'react'
import { TimelineMax } from "gsap/TweenMax";

import '../assets/css/mystyles.css'
import './white-background.css'

export default function HomePage() {
  let myElSplitterRect = useRef(null)
  let myElIcon = useRef(null)
  let myElTitle = useRef(null)
  let myElTitle2 = useRef(null)
  let myTwTimeline = new TimelineMax({paused: true})

  useEffect(() => {
    myTwTimeline
      .fromTo(myElIcon, 1.3, {x: 60, opacity: 0}, {x: 0, opacity: 1})
      .fromTo([myElTitle, myElTitle2], 1, {y: -20}, {y: 0, opacity: 1})
    myTwTimeline.play()
  }, [])

  return(
    <div className="white-background">
      <div className="inner-content">
        <img
          ref={div => myElIcon = div}
          className="icon"
          alt=''
          src={require('./../images/icon.svg')}
        />
        <div className="title-content">
          <h1 className="title" ref={div => myElTitle = div}>Seth</h1>
          <h1 className="title" ref={div => myElTitle2 = div}>Industries</h1>
        </div>
      </div>
    </div>
  )
}
