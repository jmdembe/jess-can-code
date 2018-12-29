import React from 'react'
import Link from 'gatsby-link'

// const TitleAndDescription = ({data})
//   const title = data.site.siteMetadata.TitleAndDescription
//   const description = data.site.siteMetadata.description

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
    <ul style={{width:'100%'}}>
      <li style ={{display: 'inline-flex', flexDirection:'row'}}>
        <Link to="/about" style={{color: 'white',textDecoration: 'none'}}>About</Link>
      </li>
      <li style ={{display: 'inline-flex', flexDirection:'row'}}>
        <Link to="/blog" style={{color: 'white',textDecoration: 'none'}}>Blog</Link>
      </li>
      <li style ={{display: 'inline-flex', flexDirection:'row'}}>
        <Link to="/contact" style={{color: 'white', textDecoration:'none'}}>Contact</Link>
      </li>
      <li style ={{display: 'inline-flex', flexDirection:'row'}}>
        <Link to="/uses" style={{color: 'white', textDecoration:'none'}}>Uses</Link>
      </li>
        
        
      
    </ul>
  </div>
)

export default Header
