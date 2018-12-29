import React from 'react'
import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
    <div>
        <h1>Hi everybody!</h1>
        <p>Welcome to my new internet home! <span role="img" aria-label="smiley face">😀</span></p>
        <img src = "https://source.unsplash.com/random/400x200" alt = "" />
      </div>
  </Layout>
  
)

// export const pageQuery = graphql `
//   query IndexQuery {
    
//   }
// `
export default IndexPage
