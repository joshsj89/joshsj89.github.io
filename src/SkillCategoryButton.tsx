import styles from './SkillCategoryButton.module.css';

function SkillCategoryButton({ name }: { name: String }) {
    return (
        <button className={styles['category-btn']} data-category={name}>{name}</button>
    );
}

export default SkillCategoryButton;