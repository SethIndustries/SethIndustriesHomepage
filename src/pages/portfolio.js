import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/Footer'

import '../assets/css/mystyles.css'
import '../assets/scss/mystyles.scss'
import './white-background.css'

export default function HomePage() {
  return(
    <div className="white-background">
      <Menu />
      <center>
        <h1>Portfolio</h1>
        <div className="portfolio-grid">
          <div className='portfolio-grid-left'>
            <h3>Clients</h3>
            <ul>
              <li>KPMG</li>
              <li>DOOH.com</li>
              <li>Questagame</li>
              <li>Jemfusion</li>
              <li>Wedje Designs</li>
              <li>Dan & Dan Landscaping</li>
            </ul>
          </div>
          <div className='portfolio-grid-middle'>
            <h1>My content goes here.</h1>
          </div>
          <div className='portfolio-grid-right'>
            <h2>KPMG</h2>
            <ul>
              <li>Industry: Accounting</li>
              <li>Location: React</li>
              <li>Website: <u><a href="https://google.com" target="_blank">kpmg.com.au</a></u></li>
              <li>Tech: React</li>
              <li>Description: We did such and such and such.</li>
            </ul>
          </div>
        </div>
      </center>
      <Footer />
    </div>
  )
}
