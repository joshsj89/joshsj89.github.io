import { useRef, useState } from 'react';
import SkillInterface from './Interfaces/SkillInterface';
import styles from './Skill.module.css';

const formatDescription = (description: string) => {
    const boldPattern = /\{(.*?)\}/g;
    const linkPattern = /\[(.*?)\]\((.*?)\)/g

    const formattedDescription = description.replace(boldPattern, '<strong>$1</strong>');
    const finalDescription = formattedDescription.replace(linkPattern, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');

    return finalDescription;
}

function Skill({ skill }: {skill: SkillInterface}) {
    const [showPopup, setShowPopup] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(false);
    const [hoveredPopup, setHoveredPopup] = useState(false);
    const hideTimeout = useRef<NodeJS.Timeout | null>(null);

    let skillClasses: string = '';

    if (skill.classes) {
        skill.classes.forEach((skillClass) => {
            if (styles[skillClass]) {
                skillClasses += `${styles[skillClass]} `;
            }
        });
    }

    const popupVisible = showPopup && (hoveredCard || hoveredPopup);

    // Clearn any pending timeout
    const clearHideTimeout = () => {
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
            hideTimeout.current = null;
        }
    }

    return (
        <div className={styles['skill-card']}
            onClick={() => setShowPopup(true)}
            onMouseEnter={() => {
                clearHideTimeout();
                setHoveredCard(true);
            }}
            onMouseLeave={() => {
                hideTimeout.current = setTimeout(() => {
                    setHoveredCard(false);
                    setShowPopup(false);
                }, 120);
            }}
        >
            {popupVisible && (
                <div 
                    className={styles['skill-popup']}
                    onMouseEnter={() => {
                        clearHideTimeout();
                        setHoveredPopup(true);
                    }}
                    onMouseLeave={() => {
                        hideTimeout.current = setTimeout(() => {
                            setHoveredPopup(false);
                            setShowPopup(false);
                        }, 120);
                    }}
                >
                    <div
                        className={styles['skill-description']}
                        dangerouslySetInnerHTML={{ __html: formatDescription(skill.description) }}
                    />
                </div>
            )}
            <span className={`${styles['skill-images']} ${skillClasses}`}>
                {skill.images.map((image, index) => (
                    <img src={image} alt={skill.alts[index]} title={skill.alts[index]} key={index} />
                ))}
            </span>
            <h4 className={styles['skill-name']} title={skill.name}>{skill.name}</h4>
            {/* <p className={styles['skill-description']} dangerouslySetInnerHTML={{ __html: formatDescription(skill.description) }}></p> */}
        </div>
    );
}

export default Skill;