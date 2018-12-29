import React from 'react';
import { Link } from 'gatsby';

const Footer = ({ siteTitle }) => (
    <footer style={{background: '#5F4B8B', marginTop: '60px'}}>
        <div>
            <h4 style={{margin: 0}}>
                <Link to="/" style={{color: 'white',textDecoration: 'none',}}> { siteTitle } </Link>
            </h4>
        </div>
    </footer>
)

export default Footer