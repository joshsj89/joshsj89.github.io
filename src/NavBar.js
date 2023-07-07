import React, { useState, useEffect } from 'react';
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

                const nameHeight = name.offsetHeight;
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
                <a
                    //href="#about"
                    onClick={() => dispatch({ type: ACTIONS.DISPLAY_ABOUT, payload: { state } })}
                >About
                </a>
            </div>
            <a
                className={`header-title ${hidden ? 'hidden unclickable' : ''}`}
                //href="/"
                onClick={() => dispatch({ type: ACTIONS.DISPLAY_HOME, payload: { state } })}
            >Josh Kindarara
            </a>
            <div className="links">
                <a
                    //href="#projects"
                    onClick={() => dispatch({ type: ACTIONS.DISPLAY_PROJECTS, payload: { state } })}
                >Projects
                </a>
            </div>
        </nav>
    );
}

export default NavBar;