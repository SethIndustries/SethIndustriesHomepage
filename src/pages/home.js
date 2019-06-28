import React from 'react'
import Layout from '../components/layout'
import { Tween, Timeline } from 'react-gsap'

import '../assets/css/mystyles.css'

class HomePage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Tween duration={2} from={{ height: "0%" }} to={{ height: "100%" }}>
          <div className="splitter-rect" />
        </Tween>
        <h1>My text here</h1>
        <Tween duration={2} from={{ height: "0%" }} to={{ height: "100%" }}>
          <div className="splitter-rect" />
        </Tween>
      </Layout>
    )
  }
}

export default HomePage
