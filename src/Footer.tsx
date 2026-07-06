import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import NavLinkButton from './NavLinkButton';

const year = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p>&copy; {year} Josh Kindarara</p>
            <nav className={styles['social-media']}>
                <ul>
                    <li>
                        <Link to="https://www.linkedin.com/in/joshkindarara" target="_blank" rel="noopener noreferrer">
                            <img src="images/linkedin.png" alt="LinkedIn" />
                        </Link> 
                    </li>
                    <li>
                        <Link to="https://www.github.com/joshsj89" target="_blank" rel="noopener noreferrer">
                            <img src="images/github-mark-white.png" alt="GitHub" />
                        </Link> 
                    </li>
                    <li>
                        <NavLinkButton to="/contact">
                            <img src="images/email.png" alt="Email" />
                        </NavLinkButton> 
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;