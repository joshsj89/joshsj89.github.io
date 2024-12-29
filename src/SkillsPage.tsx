import { useState } from 'react';
import Skill from './Skill';
import SkillCategoryButton from './SkillCategoryButton';
import SkillInterface from './Interfaces/SkillInterface';
import styles from './SkillsPage.module.css';
import { CategoryContext } from './Contexts/CategoryContext';

function SkillsPage({ skills }: { skills: SkillInterface[] }) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    
    const categoriesSet: Set<string> = new Set();

    skills.forEach((skill) => {
        skill.categories.forEach((category) => {
            categoriesSet.add(category);
        });
    });

    const categories: string[] = Array.from(categoriesSet);

    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
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
                            if (selectedCategory === 'All' || skill.categories.includes(selectedCategory)) {
                                return <Skill skill={skill} key={skill._id} />;
                            } else {
                                return null; 
                            }
                        })}
                    </div>
                </div>
            </div>
        </CategoryContext.Provider>
    );
}

export default SkillsPage;