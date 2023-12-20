import styles from './Skill.module.css';

const formatDescription = (description) => {
    const boldPattern = /\{(.*?)\}/g;
    const linkPattern = /\[(.*?)\]\((.*?)\)/g

    const formattedDescription = description.replace(boldPattern, '<strong>$1</strong>');
    const finalDescription = formattedDescription.replace(linkPattern, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');

    return finalDescription;
}

function Skill({ skill }) {
    return (
        <div className={`${styles.skill} ${styles['skills-col']}`}>
            <span className={`${styles['skill-images']} ${styles[skill.classes]}`}>
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