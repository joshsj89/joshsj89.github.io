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
            if (styles[skillClass]) {
                skillClasses += `${styles[skillClass]} `;
            }
        });
    }

    return (
        <div className={styles['skill-card']}>
            <img src={skill.images[0]} alt={skill.alts[0]} title={skill.alts[0]} />
            <h4 className={styles['skill-name']} title={skill.name}>{skill.name}</h4>
            {/* <p className={styles['skill-description']} dangerouslySetInnerHTML={{ __html: formatDescription(skill.description) }}></p> */}
        </div>
    );
}

export default Skill;