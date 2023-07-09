import './styles.css'

const year = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p>© {year} Josh Kindarara</p>
            <nav className="social-media">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/joshkindarara" target="_blank">
                            <img src="images/linkedin.png" alt="LinkedIn" />
                        </a> 
                    </li>
                    <li>
                    <a href="https://www.github.com/joshsj89" target="_blank">
                        <img src="images/github-mark-white.png" alt="GitHub" />
                    </a> 
                    </li>
                    <li>
                    <a href="mailto:joshsj89@gmail.com" target="_blank">
                        <img src="images/email.png" alt="Email" />
                    </a> 
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;