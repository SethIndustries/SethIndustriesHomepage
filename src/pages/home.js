import React, { useState, useRef, useEffect } from 'react'
import { TimelineMax } from "gsap/TweenMax";
import Menu from './menu'

import '../assets/css/mystyles.css'
import './white-background.css'

export default function HomePage() {
  return(
    <div className="white-background">
      <Menu />
    </div>
  )
}
