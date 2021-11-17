import React from 'react';
import '../styles/header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header-wrapper">
            <h1>bikrant</h1>
            <div className="links">
                <Link to="/" className="link">Home</Link>
                <Link to="/work" className="link">Works</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
        </div>
    )
}

export default Header
