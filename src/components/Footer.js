import React, { useState, useRef, useEffect } from 'react'
import { TimelineMax } from "gsap/TweenMax";

import '../assets/css/menu.css'

const Footer = () => {
  // let myElIcon = useRef(null)
  //
  // useEffect(() => {
  //   new TimelineMax({paused: true})
  //     .staggerFromTo([myElMenuItem], 0.25, {y: -20}, {y: 0, opacity: 1}, 0.25)
  //     .play()
  // }, [])

  return(
    <center>
      <footer>
        <p>
          Seth Industries Pty Ltd &copy; 2019 - ABN: &nbsp;
          <b>
            <u>
              <a href="https://abr.business.gov.au/ABN/View/79620035216"  target="_blank" rel="noopener noreferrer">
                79 620 035 216
              </a>
            </u>
          </b>
        </p>
      </footer>
    </center>
  )
}

export default Footer
