import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#5F4B8B',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <ul>
      <li>
        <Link to="/about" style={{color: 'white',textDecoration: 'none', display: 'inline'}}>About</Link>
      </li>
      <li>
        <Link to="/blog" style={{color: 'white',textDecoration: 'none', display: 'inline'}}>Blog</Link>
      </li>
      <li>
        <Link to="/contact" style={{color: 'white', textDecoration:'none', display: 'inline'}}>Contact</Link>
      </li>
        
        
      
    </ul>
  </div>
)

export default Header
