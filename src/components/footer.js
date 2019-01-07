import React from 'react';
import { Link } from 'gatsby';

const Footer = ({ siteTitle }) => (
    <footer style={{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'right',
        background: '#5F4B8B', 
        marginTop: '60px'}}>
        <div>
            <h4 style={{margin: 0}}>
                <Link to="/" style={{color: 'white',textDecoration: 'none',}}> { siteTitle } </Link>
            </h4>
        </div>
        <div>
            <cite style={{color: '#FFFFFF', 'paddingLeft': '8px', 'clear': 'both', 'float': 'right'}}> &copy; 2019</cite>
        </div>
        
        
    </footer>
)

export default Footer