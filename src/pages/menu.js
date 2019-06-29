import React, { useState, useRef, useEffect } from 'react'
import { TimelineMax } from "gsap/TweenMax";
import { Link } from "gatsby"

import '../assets/css/menu.css'

const Menu = () => {
  let myElIcon = useRef(null)
  let myElTitle = useRef(null)
  let myElTitle2 = useRef(null)

  let myElMenuItem = useRef(null)
  let myElMenuItem2 = useRef(null)
  let myElMenuItem3 = useRef(null)
  let myElMenuItem4 = useRef(null)

  // useEffect(() => {
  //   new TimelineMax({paused: true})
  //     .fromTo(myElIcon, 0.25, {y: -5, opacity: 0}, {y: 0, opacity: 1})
  //     .play()
  // }, [])
  //
  // useEffect(() => {
  //   new TimelineMax({paused: true})
  //     .fromTo([myElTitle, myElTitle2], 0.25, {y: -20}, {y: 0, opacity: 1})
  //     .play()
  // }, [])

  useEffect(() => {
    new TimelineMax({paused: true})
      .staggerFromTo([myElMenuItem, myElMenuItem2, myElMenuItem3, myElMenuItem4], 0.25, {y: -20}, {y: 0, opacity: 1}, 0.25)
      .play()
  }, [])

  // <img
  //   ref={div => myElIcon = div}
  //   className="menu-icon"
  //   alt=''
  //   src={require('./../images/icon.svg')}
  // />
  //
  // <h1 className="small-title" ref={div => myElTitle = div}>Seth</h1>
  // <h1 className="small-title" ref={div => myElTitle2 = div}>Industries</h1>

  return(
    <div>
      <ul id="menu">
        <ul>
          <center>
            <li><Link ref={div => myElMenuItem = div} to="/intro">Intro</Link></li>
            <li><Link ref={div => myElMenuItem2 = div} to="/portfolio">Portfolio</Link></li>
            <li><Link ref={div => myElMenuItem3 = div} to="/about">About</Link></li>
            <li><Link ref={div => myElMenuItem4 = div} to="/contact">Contact</Link></li>
          </center>
        </ul>
      </ul>
    </div>
  )
}

export default Menu
