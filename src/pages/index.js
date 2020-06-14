import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`Jessica Dembe`, `web development`, `mobile development`, `react`, `data visualizations`]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        <h1>
          Hi everybody!{" "}
          <span role="img" aria-label="wave emoji">
            👋🏾
          </span>
        </h1>
        <p>My name is Jessica Dembe.</p>
        <p>I am a front-end developer based in the Washington, D.C area.</p>
        <p>I like making creative web experiences. My current interests--data visualization, mobile apps, and accessibility</p>

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
