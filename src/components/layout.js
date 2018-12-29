import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
// import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title='Jessica Dembe'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle='Jessica Dembe' />
    <div style={{ margin: '0 auto', maxWidth: 960, padding: '0px 1.0875rem 1.45rem', paddingTop: 0,}}>
      {children}
      
    </div>
    <Footer siteTitle ='Jessica Dembe' />
  </div>
  
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
