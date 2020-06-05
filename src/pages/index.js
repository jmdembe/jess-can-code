import React from 'react'
import Layout from "../components/layout"
import styled from "styled-components"

const HeaderTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 44px;
`

const MyPhoto = styled.img`
  height: 200px;
  width: 400px;
  border-radius: 1px solid black;
`

const Paragraph = styled.p `
  font-family: 'Nunito', Arial, sans-serif;
`

const IndexPage = () => (
  <Layout>
        <HeaderTitle>Hi everybody!</HeaderTitle>
        <Paragraph>My name is Jessica Dembe <span role="img" aria-label="black hand wave">👋🏾</span></Paragraph>
        <Paragraph>I am a front-end developer based in the Washington, D.C. area.</Paragraph>
        <Paragraph>I like making creating web experiences with expertised in data visualization and accessibility.</Paragraph>
        <Paragraph>Here is a random picture as this site is still under construction!</Paragraph>
        <MyPhoto src = "https://source.unsplash.com/random/" alt = "A random stand-in image. This does not convey any meaning" />
  </Layout>
  
)

export default IndexPage
