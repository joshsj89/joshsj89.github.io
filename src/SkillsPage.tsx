import Skill from './Skill';
import SkillInterface from './Interfaces/SkillInterface';
import styles from './SkillsPage.module.css';

function SkillsPage({ skills }: { skills: SkillInterface[] }) {
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