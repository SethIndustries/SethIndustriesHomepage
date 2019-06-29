import React from 'react'
import Menu from '../components/menu'

import '../assets/css/mystyles.css'
import './white-background.css'

export default function HomePage() {
  return(
    <div className="white-background">
      <Menu />
      <h1>Portfolio</h1>
    </div>
  )
}
