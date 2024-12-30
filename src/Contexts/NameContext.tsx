import { createContext, useContext, useRef } from 'react';

const NameContext = createContext<React.RefObject<HTMLHeadingElement> | null>(null);

export const NameProvider = ({ children }) => {
    const nameRef = useRef<HTMLHeadingElement | null>(null);

    return (
        <NameContext.Provider value={nameRef}>
            {children}
        </NameContext.Provider>
    );
}

export function useName() {
    const context = useContext(NameContext);

    if (!context) {
        throw new Error('useName must be used within a NameProvider');
    }

    return context;
}