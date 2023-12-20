import Headshot from './Headshot';
import ResumeButton from './ResumeButton';
import styles from './About.module.css';

function About() {
    return (
        <div className={styles.about}>
            <h1 className="name">Josh Kindarara</h1>
            <div className={styles["headshot-resume-button"]}>
                <Headshot num="0" />
                <div className={styles['info-box']}>
                    <h2>Software Engineer</h2> {/*Full-Stack Developer*/}
                    <h3>Greater Sacramento, CA</h3>
                    <h3>Santa Clara, CA</h3>
                    <p>
                        I am a software engineer who enjoys solving problems and learning new things. 
                        I have experience with full-stack web development, and I am currently working 
                        on a project to learn more about machine learning.
                    </p>
                    <ResumeButton downloadID="64b92474f706eb41f13dc367" />
                </div>
            </div>
        </div>
    );
}

export default About;