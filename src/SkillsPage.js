import Skill from './Skill';
import styles from './SkillsPage.module.css';

let skills = [];
try {
    const response = await fetch('https://joshsj89-1d7a9e7057c7.herokuapp.com/api/skills/all');
    skills = await response.json();
} catch (err) {
    console.error('Error:', err);
}

function SkillsPage() {
    return (
        <div className={`page ${styles['skills-page']}`}>
            <div className={styles['skills-container']}>
                <h1>Skills</h1>
                <div className={styles['skills-row']}>
                    {skills.map((skill) => {
                        return <Skill skill={skill} key={skill._id} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default SkillsPage;