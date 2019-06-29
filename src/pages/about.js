import React, { useRef, useEffect } from 'react'
import { TimelineMax } from "gsap/TweenMax";
import Menu from '../components/menu'
import { Link } from 'gatsby'

import '../assets/css/mystyles.css'
import './white-background.css'

export default function AboutPage() {
  let myElTextHeader = useRef(null)
  let myElTextContent = useRef(null)
  let myElTextContent2 = useRef(null)
  let myElTextContent3 = useRef(null)
  let myElTextContent4 = useRef(null)
  let myElTextContent5 = useRef(null)

  useEffect(() => {
    new TimelineMax({paused: true})
      .staggerFromTo(
        [
          myElTextHeader, myElTextContent, myElTextContent2, myElTextContent3, myElTextContent4, myElTextContent5
        ], 4, {y: -20, opacity: 0}, {y: 0, opacity: 1}, 1
      )
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
        <h1 ref={div => myElTextHeader = div}>
          About
        </h1>
        <p className='text-block left-align' >
          <span ref={div => myElTextContent = div}>
            <b>Seth Industries</b> is a global agency that delivers <b>compelling and reliable digital products</b>.
          </span>
          <br />
          <br />
          <span ref={div => myElTextContent2 = div}>
            From a technical background of web development in <b>JavaScript</b> and <b>Ruby</b>, we
            became specialized in solving commercial software problems – the ability to <b>add or fix features in any part of a software system</b>. We understand:
            <br />
            <br />
            <ul>
              <li>User interface design</li>
              <li>Interactive frontends</li>
              <li>Backend APIs</li>
              <li>Databases, infrastructure and hosting</li>
            </ul>
          </span>
          <span ref={div => myElTextContent3 = div}>
            The name comes from a {"founders'"} college joke about “Seth”,
            a mythical and charismatic individual highly regarded for his ability to <b>independently and consistently
            produce results instead of excuses</b>. The company and all its staff strives to live up to that standard and defy the reputation
            of software development as an unclear
            and somewhat arcane process for even very technical business owners and product
            managers. Our aim is for owning a quality technical product (with our help) to feel the same as
            using one – <b>simple, clear and reliable</b>.
          </span>
          <br />
          <br />
          <span ref={div => myElTextContent4 = div}>
            We now work with companies in a wide variety of industries on both <b>new and existing commercial software</b>, <b>mobile apps</b>, <b>display websites</b> and more.
          </span>
          <br />
          <br />
          <span ref={div => myElTextContent5 = div}>
            Take a look at <b><u><Link to="/portfolio">some of our work</Link></u></b> or <b><u><Link to="/contact">get in touch</Link></u></b>.
          </span>
        </p>
      </center>
    </div>
  )
}
