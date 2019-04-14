import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <h1>404 - NOT FOUND</h1>
    <p>{"This page doesn't exist."}</p>
    <Link to="/">Go back to the home page</Link>
  </Layout>
)

export default NotFoundPage
