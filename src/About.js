import HeadshotInfoBox from './HeadshotInfoBox';
import { infoTexts } from './Constants/aboutMe';
import ResumeButton from './ResumeButton';
import styles from './About.module.css';

console.log(infoTexts['Football'].title instanceof Array);

function About() {
    return (
        <div className={styles.about}>
            <h1 className="name">Josh Kindarara</h1>
            <div className={styles['info-boxes']}>
                <HeadshotInfoBox comp={<ResumeButton downloadID="64b92474f706eb41f13dc367" />} num="0" side="left" text={infoTexts['Programming'].text} title={infoTexts['Programming'].title} />
                <HeadshotInfoBox num="2" side="right" text={infoTexts['Jazz'].text} title={infoTexts['Jazz'].title} />
                <HeadshotInfoBox num="3" side="left" text={infoTexts['Photography'].text} title={infoTexts['Photography'].title} />
                <HeadshotInfoBox num="4" side="right" text={infoTexts['Football'].text} title={infoTexts['Football'].title} />
            </div>
        </div>
    );
}

export default About;