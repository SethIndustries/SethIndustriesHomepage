import React from 'react'
import Layout from '../components/layout'
import { Tween, Timeline } from 'react-gsap'

import '../assets/css/mystyles.css'

class HomePage extends React.Component {
  render() {
    return (
      <div>
      <Timeline
        target={
          <p className="title-text">Seth Industries</p>
        }
      >
        <Tween duration={4} />
        <Tween duration={3} from={{ opacity: 0 }} to={{ opacity: 1 }} />
      </Timeline>
      <Timeline
        target={
          <div className="splitter-rect" />
        }
      >
        <Tween duration={2} from={{ height: "0px" }} to={{ height: "1000px" }} />
        <Tween duration={2} from={{ width: "2px" }} to={{ width: "1000px" }} />
      </Timeline>

      </div>
    )
  }
}

export default HomePage
