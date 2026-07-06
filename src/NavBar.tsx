import { useState, useEffect, useRef } from 'react';
import styles from './NavBar.module.css';
import { useName } from './Contexts/NameContext';
import { useNavigate, useLocation } from 'react-router-dom';
import NavLinkButton from './NavLinkButton';

function NavBar() {
    const nameRef = useName();
    const navBarRef = useRef<HTMLDivElement | null>(null);
    const [hidden, setHidden] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    // Directly manipulating DOM because it's common for the scroll event
    useEffect(() => {
        if (location.pathname === '/') {
            const handleScroll = () => {
                if (nameRef?.current == null) return;

                const navBarHeight = navBarRef.current?.offsetHeight; // Get the height of the navbar
                const nameObj = nameRef.current.getBoundingClientRect(); // Get the position of the header title

                if (navBarHeight == null) return;

                if (navBarHeight <= nameObj.bottom) { // If the user is at the top of the page, hide the header title
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
    }, [location.pathname, nameRef]);

    return (
        <nav className={styles.navbar} ref={navBarRef}>
            <div className={`${styles.links} ${location.pathname === '/skills' ? styles.active : ''}`}>
                <NavLinkButton
                    to="/skills"
                    className={styles['link-button']}
                >Skills
                </NavLinkButton>
            </div>
            <NavLinkButton
                to="/"
                className={`${styles['header-title']} ${styles['link-button']} ${hidden ? `${styles.hidden} ${styles.unclickable}` : ''}`}
                onClick={() => setHidden(true)}
            >Josh Kindarara
            </NavLinkButton>
            <div className={`${styles.links} ${location.pathname === '/projects' ? styles.active : ''}`}>
                <NavLinkButton
                    to="/projects"
                    className={styles['link-button']}
                >Projects
                </NavLinkButton>
            </div>
        </nav>
    );
}

export default NavBar;