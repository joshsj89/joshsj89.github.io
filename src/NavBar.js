import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ACTIONS } from './App';
import "./styles.css";

function NavBar({ dispatch, state }) {
    const [hidden, setHidden] = useState(true);

    // Directly manipulating DOM because it's common for the scroll event
    useEffect(() => {
        if (state.Home) {
            const handleScroll = () => {
                const name = document.querySelector(".name");
                if (name == null) {
                    return;
                }

                const nameMargin = parseFloat(window.getComputedStyle(name).marginTop); // Get the margin of the header title
                const nameHeight = name.offsetHeight + nameMargin; // Get the height of the header title

                if (window.scrollY < nameHeight) { // If the user is at the top of the page, hide the header title
                    setHidden(true);
                } else { // If the user is not at the top of the page, show the header title
                    setHidden(false);
                }
            };

            window.addEventListener('scroll', handleScroll);
            
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        } else {
            setHidden(false);
        }

    });

    return (
        <nav className="navbar">
            <div className="links">
                <Link
                    className='button-link'
                    to="/skills"
                    onClick={() => dispatch({ type: ACTIONS.DISPLAY_SKILLS, payload: { state } })}
                >Skills
                </Link>
            </div>
            <Link
                className={`header-title ${hidden ? 'hidden unclickable' : ''}`}
                to="/"
                onClick={() => {
                    setHidden(true);
                    dispatch({ type: ACTIONS.DISPLAY_HOME, payload: { state } })
                    }
                }
            >Josh Kindarara
            </Link>
            <div className="links">
                <Link
                    className='button-link'
                    to="/projects"
                    onClick={() => dispatch({ type: ACTIONS.DISPLAY_PROJECTS, payload: { state } })}
                >Projects
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;