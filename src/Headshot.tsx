import { useState } from 'react';
import styles from './Headshot.module.css';

function Headshot({ num }) {
    const [spin, setSpin] = useState(false);
    
    const handleClick = () => {
        if (!spin) {
            setSpin(true);
            setTimeout(() => {
                setSpin(false);
            }, 500);
        }
    }

    return (
        <img 
            id = {`headshot${num}`}
            className={`${styles.headshot} ${spin ? styles.rotate : ''}`}
            src={`images/headshot${num}.jpg`}
            alt="Headshot"
            onClick={handleClick}
        />
    );
}

export default Headshot;