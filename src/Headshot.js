import React, { useState } from 'react';
import './styles.css';

function Headshot() {
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
            id = "headshot1"
            className={`headshot ${spin ? 'rotate' : ''}`}
            src="images/headshot.jpg"
            alt="Headshot"
            onClick={handleClick}
        />
    );
}

export default Headshot;