import React from 'react'
import PropTypes from 'prop-types'
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
