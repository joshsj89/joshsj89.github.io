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
                <button
                    className='link-button'
                    //href="#skills"
                    onClick={() => dispatch({ type: ACTIONS.DISPLAY_SKILLS, payload: { state } })}
                >Skills
                </button>
            </div>
            <button
                className={`header-title link-button ${hidden ? 'hidden unclickable' : ''}`}
                //href="/"
                onClick={() => {
                    setHidden(true);
                    dispatch({ type: ACTIONS.DISPLAY_HOME, payload: { state } })
                    }
                }
            >Josh Kindarara
            </button>
            <div className="links">
                <button
                    className='link-button'
                    //href="#projects"
                    onClick={() => dispatch({ type: ACTIONS.DISPLAY_PROJECTS, payload: { state } })}
                >Projects
                </button>
            </div>
        </nav>
    );
}

export default NavBar;