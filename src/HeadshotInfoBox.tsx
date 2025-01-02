import Headshot from './Headshot';
import styles from './HeadshotInfoBox.module.css';
import Typewriter from 'typewriter-effect';

function HeadshotInfoBox({ comp, num, side, text, title }: { comp?: JSX.Element, num: string, side: "left" | "right", text: string, title: string | string[] }) {
    return (
        <div className={styles["headshot-info-box"]}>
            {side === "left" && <Headshot num={num} />}
            <div className={styles['info-box']}>
                <div className={styles['info-box-header']}>
                    {title instanceof Array && 
                        <Typewriter
                            options={{
                                strings: title,
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 50,
                                // pauseFor: 1000,
                            }}
                        />
                    }
                    {!(title instanceof Array) && <div>{title}</div>}
                </div>
                {/* 
                <h3>Greater Sacramento, CA</h3>
                <h3>Santa Clara, CA</h3> 
                */}
                <p className={styles['info-text']}>
                    {text}
                </p>
                <div className={styles['info-box-component']}>
                    {comp}
                </div>
            </div>
            {side === "right" && <Headshot num={num} />}
        </div>
    );
}

export default HeadshotInfoBox;