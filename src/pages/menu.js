import React, { useState, useRef, useEffect } from 'react'
import { TimelineMax } from "gsap/TweenMax";

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
            <li><a ref={div => myElMenuItem = div} href="#">Home</a></li>
            <li><a ref={div => myElMenuItem2 = div} href="#">Portfolio</a></li>
            <li><a ref={div => myElMenuItem3 = div} href="#">About</a></li>
            <li><a ref={div => myElMenuItem4 = div} href="#">Contact</a></li>
          </center>
        </ul>
      </ul>
    </div>
  )
}

export default Menu
