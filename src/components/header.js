import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

// const TitleAndDescription = ({data})
//   const title = data.site.siteMetadata.TitleAndDescription
//   const description = data.site.siteMetadata.description

const HeaderWrapper = styled.header`
  align-items: center;
  background-color: #5F4B8B;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.45rem;
`

const NameWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const NameHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin: 0;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
`

const MenuItem = styled.li`
  display: inline-flex;
  font-family: 'Nunito', Arial, sans-serif;
  flex-direction: row;
  margin: 0 25px;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper className={`header-wrapper`}>
    <NameWrapper>
      <NameHeading>
        <StyledLink to="/"> {siteTitle} </StyledLink>
      </NameHeading>
    </NameWrapper>
    <nav>
      <ul>
        <MenuItem>
          <StyledLink to="/about" >About</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/blog" >Blog</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/uses">Uses</StyledLink>
        </MenuItem>
      </ul>
    </nav>
  </HeaderWrapper>
)

export default Header
