import React, { useState, useRef, useEffect } from 'react'
import { TimelineMax } from "gsap/TweenMax";

import '../assets/css/mystyles.css'
import './black-background.css'

export default function IntroPage() {
  let myElSplitterRect = useRef(null)
  let myElIcon = useRef(null)
  let myElTitle = useRef(null)
  let myElTitle2 = useRef(null)
  let myTwTimeline = new TimelineMax({paused: true})

  const [title, setTitle] = useState('Seth');
  const [title2, setTitle2] = useState('Industries');

  useEffect(() => {
    myTwTimeline
      .fromTo(myElSplitterRect, 1, {height: "0.3%"}, {height: "100%"})
      .fromTo(myElSplitterRect, 1, {width: "0.3%"}, {width: "100%"})
      .fromTo(myElIcon, 1.3, {x: 60, opacity: 0}, {x: 0, opacity: 1})
      .staggerFromTo([
          myElTitle,
          myElTitle2
        ], 1, {y: -20}, {y: 0, opacity: 1}, 0.5
      )
      .staggerFromTo([
          myElIcon,
          myElTitle,
          myElTitle2
        ], 1, {y: 0}, {y: 20, opacity: 0}, 0.5
      )
      .to(myElIcon, 0, { display: 'none' })
      .add(() => { setTitle('Digital'); setTitle2('Products') })
      .staggerFromTo([
          myElTitle,
          myElTitle2
        ], 1, {y: -20, opacity: 0}, {y: 0, opacity: 1}, 0.5
      )
      .staggerFromTo([
          myElIcon,
          myElTitle,
          myElTitle2
        ], 1, {y: 0}, {y: 20, opacity: 0}, 0.5
      )
      .add(() => { setTitle('You describe.'); setTitle2('We deliver.') })
      .pause()
      .fromTo(myElTitle, 1, {opacity: 0}, {opacity: 1})
      .to(myElIcon, 1, {display: 'none'}) // Pause for dramatic effect
      .fromTo(myElTitle2, 3, {opacity: 0}, {opacity: 1})
      .staggerTo([
          myElTitle,
          myElTitle2
        ], 1, {opacity: 0}, 0.5
      )
      .add(() => { window.location.replace('/home') })
    myTwTimeline.play()
  }, [])

  return (
    <div className="black-background">
      <div className="splitter-rect" ref={div => myElSplitterRect = div}>
        <div className="inner-content">
          <img
            ref={div => myElIcon = div}
            className="icon"
            alt=''
            src={require('./../images/icon.svg')}
          />
          <div className="title-content">
            <h1 className="title" ref={div => myElTitle = div}>{title}</h1>
            <h1 className="title" ref={div => myElTitle2 = div}>{title2}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
