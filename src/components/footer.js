import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components"

const FooterWrapper = styled.footer`
    align-items: right;
    background: #5F4B8B;
    display: flex;
    flex-direction: row;
    padding-top: 4em;
    margin-top: 60px;
`

const Footer = ({ siteTitle }) => (
    <FooterWrapper>
        <div>
            <h4 style={{margin: 0}}>
                <Link to="/" style={{color: 'white',textDecoration: 'none',}}> { siteTitle } </Link>
            </h4>
        </div>
    </FooterWrapper>
)

export default Footer