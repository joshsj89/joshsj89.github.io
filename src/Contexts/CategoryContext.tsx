import { createContext, useContext} from 'react';

interface CategoryContextType {
    selectedCategory: string;
    // setSelectedCategory: (category: string) => void;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>; // can handle direct updates and functional updates
}

export const CategoryContext = createContext<CategoryContextType | null>(null);

export function useCategory() {
    const context = useContext(CategoryContext);

    if (!context) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }

    return context;
}