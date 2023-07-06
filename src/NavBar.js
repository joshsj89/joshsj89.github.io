import React from 'react';
import "./styles.css";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="links">
                <a href="#about">About</a>
            </div>
            <a className="header-title" href="/">Josh Kindarara</a>
            <div className="links">
                <a href="#projects">Projects</a>
            </div>
        </nav>
    );
}

export default NavBar;