import React from 'react'
import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
    <div>
        <h1>Hi everybody!</h1>
        <p>My name is Jessica Dembe <span role="img" aria-label="black hand wave">👋🏾</span></p>
        <p>I am a front-end developer who is currently based in the Washington, D.C. area.
        I like front-end development because I am fascinated with how users interact with the internet.</p>
        <p>I do a lot of tech-related things—I code, I write, I speak, I teach, and I lead.
        This website combines all of what I do so that you can learn about my whole story.</p>

        <img src = "https://source.unsplash.com/random/400x200" alt = "" />
      </div>
  </Layout>
  
)

// export const pageQuery = graphql `
//   query IndexQuery {
    
//   }
// `
export default IndexPage
