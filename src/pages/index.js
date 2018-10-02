import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi everybody!</h1>
    <p>Welcome to my new internet home! 😀</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

// export const pageQuery = graphql `
//   query IndexQuery {
    
//   }
// `
export default IndexPage
