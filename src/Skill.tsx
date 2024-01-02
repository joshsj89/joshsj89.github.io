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
    let skillClasses: string = '';

    if (skill.classes) {
        skill.classes.forEach((skillClass) => {
            skillClasses += `${styles[skillClass]} `;
        });
    }

    return (
        <div className={`${styles.skill} ${styles['skills-col']}`}>
            <span className={`${styles['skill-images']} ${skillClasses}`}>
                {skill.images.map((image, index) => {
                    return <img src={image} alt={skill.alts[index]} key={index} />
                })}
            </span>
            <h4 className={styles['skill-name']}>{skill.name}</h4>
            <p className={styles['skill-description']} dangerouslySetInnerHTML={{ __html: formatDescription(skill.description) }}></p>
        </div>
    );
}

export default Skill;