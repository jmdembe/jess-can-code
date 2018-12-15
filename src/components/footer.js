import React from 'react';
import Link from 'gatsby-link';

const Footer = ({ siteTitle }) => (
    <footer style={{background: '#5F4B8B', marginTop: '20px'}}>
        <div>
            <p style={{margin: 0}}>
                <Link to="/" style={{color: 'white',textDecoration: 'none',}}> { siteTitle } </Link>
            </p>
        </div>
    </footer>
)

export default Footer