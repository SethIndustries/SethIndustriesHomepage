import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/Footer'

import '../assets/css/mystyles.css'
import './white-background.css'

export default function BlogPage() {
  return(
    <div className="white-background">
      <Menu />
      <h1 className="show-text">Blog</h1>
      <Footer />
    </div>
  )
}
