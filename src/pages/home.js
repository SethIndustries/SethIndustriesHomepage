import React from 'react'
import Menu from '../components/menu'
import HeroBlock from '../components/HeroBlock'
import Footer from '../components/Footer'

import '../assets/css/mystyles.css'
import './white-background.css'

export default function HomePage() {
  return(
    <div className="white-background">
      <Menu />
      <div className="hero-block">
        <HeroBlock />
      </div>
      <div className="hero-block">
        <p className='show-text'>
          Seth Industries believes in <b>prototypes over perfection</b>. Read more about our design philosophy on our Blog.
        </p>
      </div>
      <Footer />
    </div>
  )
}
