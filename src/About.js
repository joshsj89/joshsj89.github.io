import Headshot from './Headshot';
import HeadshotInfoBox from './HeadshotInfoBox';
import { infoTexts } from './Constants/aboutMe';
import ResumeButton from './ResumeButton';
import styles from './About.module.css';
import Typewriter from 'typewriter-effect';

function About() {
    return (
        <div className={styles.about}>
            <h1 className="name">Josh Kindarara</h1>
            <div className={styles['info-boxes']}>
                <div className={styles["headshot-resume-button"]}>
                    <Headshot num="0" />
                    <div className={styles['info-box']}>
                        <div className={styles['info-box-header']}>
                            <Typewriter
                                options={{
                                    strings: infoTexts['Programming'].title,
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 50,
                                    pauseFor: 1000,
                                }}
                            />
                        </div>
                        {/* 
                        <h3>Greater Sacramento, CA</h3>
                        <h3>Santa Clara, CA</h3> 
                        */}
                        <p className={styles['info-text']}>
                            {infoTexts['Programming'].text}
                        </p>
                        <ResumeButton downloadID="64b92474f706eb41f13dc367" />
                    </div>
                </div>
                <HeadshotInfoBox num="2" side="right" text={infoTexts['Jazz'].text} title={infoTexts['Jazz'].title} />
                <HeadshotInfoBox num="3" side="left" text={infoTexts['Photography'].text} title={infoTexts['Photography'].title} />
                <HeadshotInfoBox num="4" side="right" text={infoTexts['Football'].text} title={infoTexts['Football'].title} />
            </div>
        </div>
    );
}

export default About;