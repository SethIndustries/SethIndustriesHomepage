import React, { useState, useRef, useEffect } from 'react'
import { TimelineMax } from "gsap/TweenMax";

import '../assets/css/menu.css'

const Footer = () => {
  let myElFooter = useRef(null)

  useEffect(() => {
    new TimelineMax({paused: true})
      .fromTo(myElFooter, 2, {}, {}) // holding pattern
      .fromTo(myElFooter, 1, {y: -20, opacity: 0}, {y: 0, opacity: 1})
      .play()
  }, [])

  return(
    <center>
      <footer>
        <p ref={(div => myElFooter = div)}>
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
