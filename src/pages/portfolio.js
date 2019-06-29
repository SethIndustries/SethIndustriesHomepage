import React from 'react'
import Menu from '../components/menu'

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
            <h1>My content goes here.</h1>
          </div>
          <div className='portfolio-grid-right'>
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
        </div>
      </center>
    </div>
  )
}
