import React, { useEffect } from 'react';
import "./styles.css";

function NavBar() {
    // Directly manipulating DOM because it's common for the scroll event
    useEffect(() => {
        const handleScroll = () => {
            const nameHeight = document.querySelector(".name").offsetHeight;
            const headerTitle = document.querySelector(".header-title");

            if (window.scrollY < nameHeight) { // If the user is at the top of the page, hide the header title
                headerTitle.classList.add('hidden');
                headerTitle.classList.add('unclickable');
            } else { // If the user is not at the top of the page, show the header title
                headerTitle.classList.remove('hidden');
                headerTitle.classList.remove('unclickable');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav className="navbar">
            <div className="links">
                <a href="#about">About</a>
            </div>
            <a 
                className="header-title hidden unclickable" 
                href="/"
                >Josh Kindarara
            </a>
            <div className="links">
                <a href="#projects">Projects</a>
            </div>
        </nav>
    );
}

export default NavBar;