import React, { useRef, useEffect } from 'react'
import { TimelineMax } from "gsap/TweenMax";
import Menu from './menu'

import '../assets/css/mystyles.css'
import './white-background.css'

export default function ContactPage() {
  let myElTextHeader = useRef(null)
  let myElTextContent = useRef(null)
  let myElTextContent2 = useRef(null)
  let myElTextContent3 = useRef(null)
  let myElIcon = useRef(null)

  useEffect(() => {
    new TimelineMax({paused: true})
      .staggerFromTo(
        [
          myElTextHeader, myElTextContent, myElTextContent2, myElTextContent3
        ], 4, {y: -20, opacity: 0}, {y: 0, opacity: 1}, 1
      )
      .play()
  }, [])

  useEffect(() => {
    new TimelineMax({paused: true})
      .fromTo(myElIcon, 4.5, {}, {})
      .fromTo(myElIcon, 2, {y: -20, opacity: 0}, {y: 0, opacity: 1})
      .play()
  }, [])

  return(
    <div className="white-background">
      <Menu />
      <center>
        <h1 ref={div => myElTextHeader = div}>
          Contact
        </h1>
        <p className='text-block' >
          <span ref={div => myElTextContent = div}>
            Got an idea for a new startup but {"don't"} have a CTO co-founder?
          </span>
          <br />
          <span ref={div => myElTextContent2 = div}>
            Tech team bogged down or not producing results?
          </span>
          <br />
          <br />
          <span ref={div => myElTextContent3 = div}>
            {"Let's talk:"} <b><u><a href="mailto:contact@sethindustries.com.au">contact@sethindustries.com.au</a></u></b>
          </span>
        </p>
        <img
          ref={div => myElIcon = div}
          className="centered-icon"
          alt=''
          src={require('./../images/icon.svg')}
        />
      </center>
    </div>
  )
}