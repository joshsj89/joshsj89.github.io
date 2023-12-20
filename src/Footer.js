import { ACTIONS } from './App';
import styles from './Footer.module.css';

const year = new Date().getFullYear();

function Footer({ dispatch, state }) {
    return (
        <footer>
            <p>© {year} Josh Kindarara</p>
            <nav className={styles['social-media']}>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/joshkindarara" target="_blank" rel="noreferrer">
                            <img src="images/linkedin.png" alt="LinkedIn" />
                        </a> 
                    </li>
                    <li>
                        <a href="https://www.github.com/joshsj89" target="_blank" rel="noreferrer">
                            <img src="images/github-mark-white.png" alt="GitHub" />
                        </a> 
                    </li>
                    <li>
                        <button onClick={() => dispatch({ type: ACTIONS.DISPLAY_CONTACT, payload: { state } })}>
                            <img src="images/email.png" alt="Email" />
                        </button> 
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;