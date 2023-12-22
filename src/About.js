import HeadshotInfoBox from './HeadshotInfoBox';
import { infoTexts } from './Constants/aboutMe';
import InstagramEmbedder from './InstagramEmbedder';
import ResumeButton from './ResumeButton';
import SpotifyEmbedder from './SpotifyEmbedder';
import styles from './About.module.css';

function About() {
    return (
        <div className={styles.about}>
            <h1 className="name">Josh Kindarara</h1>
            <div className={styles['info-boxes']}>
                <HeadshotInfoBox 
                    comp={<ResumeButton downloadID="64b92474f706eb41f13dc367" />} 
                    num="0" 
                    side="left" 
                    text={infoTexts['Programming'].text} 
                    title={infoTexts['Programming'].title} 
                />
                <HeadshotInfoBox 
                    comp={<SpotifyEmbedder size="Compact" sizePercentage="100" type="playlist" uri="1GSNGAu8phHtkUNyHgGyf8" />}
                    num="2" 
                    side="right" 
                    text={infoTexts['Jazz'].text} 
                    title={infoTexts['Jazz'].title} 
                />
                <HeadshotInfoBox 
                    comp={<InstagramEmbedder account="kinders.photography" />}
                    num="3" 
                    side="left" 
                    text={infoTexts['Photography'].text} 
                    title={infoTexts['Photography'].title} 
                />
                <HeadshotInfoBox 
                    num="4" 
                    side="right" 
                    text={infoTexts['Football'].text} 
                    title={infoTexts['Football'].title} 
                />
            </div>
        </div>
    );
}

export default About;