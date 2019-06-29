import React, { useRef, useEffect } from 'react'
import { TimelineMax } from "gsap/TweenMax";
import Menu from './menu'

import '../assets/css/mystyles.css'
import './white-background.css'

export default function AboutPage() {
  let myElTextHeader = useRef(null)
  let myElTextContent = useRef(null)

  useEffect(() => {
    new TimelineMax({paused: true})
      .staggerFromTo([myElTextHeader, myElTextContent], 1, {y: -20, opacity: 0}, {y: 0, opacity: 1}, 0.25)
      .play()
  }, [])

  // useEffect(() => {
  //   console.log('running effect')
  //   new TimelineMax({paused: true})
  //     .staggerFromTo([myElTextHeader, myElTextContent], 0.25, {y: -20}, {y: 0, opacity: 1}, 0.25)
  //     .play
  // }, [])

  return(
    <div className="white-background">
      <Menu />
      <center>
        <h1 className='trasparent' ref={div => myElTextHeader = div}>About</h1>
        <p className='trasparent' ref={div => myElTextContent = div}>Seth Industries is a digital agency specialising in <b>JavaScript</b> and <b>Ruby</b>.</p>
      </center>
    </div>
  )
}
