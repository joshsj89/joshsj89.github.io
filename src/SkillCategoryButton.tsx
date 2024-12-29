import { useCategory } from './Contexts/CategoryContext';
import styles from './SkillCategoryButton.module.css';

interface SkillCategoryButtonProps {
    name: string;
}

function SkillCategoryButton({ name }: SkillCategoryButtonProps) {
    const { selectedCategory, setSelectedCategory } = useCategory();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const category = event.currentTarget.dataset.category;

        if (category) {
            setSelectedCategory(category);
        }
    }

    const isSelected = selectedCategory === name;

    return (
        <button
            className={`${styles['category-btn']} ${isSelected ? styles['selected'] : ''}`}
            data-category={name}
            onClick={handleClick}
        >{name}
        </button>
    );
}

export default SkillCategoryButton;