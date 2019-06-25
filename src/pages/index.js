import React from 'react'
import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
    <div>
        <h1>Hi everybody!</h1>
        <p>My name is Jessica Dembe <span role="img" aria-label="black hand wave">👋🏾</span></p>
        <p>I am a front-end developer who is currently based in the Washington, D.C. area</p>
        <p>Here is a random picture as this site is still under construction!</p>
        <img src = "https://source.unsplash.com/random/400x200" alt = "" />
      </div>
  </Layout>
  
)

// export const pageQuery = graphql `
//   query IndexQuery {
    
//   }
// `
export default IndexPage
