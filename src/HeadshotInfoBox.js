import Headshot from './Headshot';
import styles from './HeadshotInfoBox.module.css';

function HeadshotInfoBox({ num, side, text, title }) {
    return (
        <div className={styles["headshot-info-box"]}>
                {side === "left" && <Headshot num={num} />}
                <div className={styles['info-box']}>
                    <div className={styles['info-box-header']}>
                        {title}
                    </div>
                    {/* 
                    <h3>Greater Sacramento, CA</h3>
                    <h3>Santa Clara, CA</h3> 
                    */}
                    <p className={styles['info-text']}>
                        {text}
                    </p>
                </div>
                {side === "right" && <Headshot num={num} />}
            </div>
    );
}

export default HeadshotInfoBox;