import React from 'react'
import Layout from '../components/layout'

class HomePage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>My text here</h1>
      </Layout>
    )
  }
}

export default HomePage
