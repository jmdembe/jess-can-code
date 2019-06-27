import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from "styled-components"

import Header from '../components/header'
import Footer from '../components/footer'

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const Layout = ({ children }) => (
  
  <div>
    <Helmet
      lang="en"
      title= 'Jessica Dembe' 
      meta={[
        { name: 'description', content: 'Jessica Dembe\'s blog and portfolio' },
        { name: 'keywords', content: 'Jessica Dembe blog coding javascript' },
      ]}
    />
    <Header siteTitle='Jessica Dembe' />
    <Content>
      {children}
    </Content>
    <Footer siteTitle ='Jessica Dembe' />
  </div>
  
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
