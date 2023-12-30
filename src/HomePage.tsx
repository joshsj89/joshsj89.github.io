import About from './About';
import './styles.css';
import styles from './HomePage.module.css';

function HomePage() {
    return (
        <div className={`page ${styles['home-page']}`}>
            <About />
        </div>
    );
}

export default HomePage;