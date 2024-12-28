import Skill from './Skill';
import SkillCategoryButton from './SkillCategoryButton';
import SkillInterface from './Interfaces/SkillInterface';
import styles from './SkillsPage.module.css';

function SkillsPage({ skills }: { skills: SkillInterface[] }) {
    const categoriesSet: Set<string> = new Set();

    skills.forEach((skill) => {
        skill.categories.forEach((category) => {
            categoriesSet.add(category);
        });
    });

    const categories: string[] = Array.from(categoriesSet);

    return (
        <div className={`page ${styles['skills-page']}`}>
            <div className={styles['skills-container']}>
                <h1>Skills</h1>
                <div className={styles.categories}>
                    <SkillCategoryButton name="All"/>
                    {categories.map((category, index) => (
                        <SkillCategoryButton name={category} key={index} />
                    ))}
                </div>
                <div className={styles['skills-grid']}>
                    {skills.map((skill) => {
                        return <Skill skill={skill} key={skill._id} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default SkillsPage;