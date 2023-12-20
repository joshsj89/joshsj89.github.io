import { useEffect, useReducer } from 'react';
import styles from './App.module.css';
import ContactPage from './ContactPage';
import Footer from './Footer';
import HomePage from './HomePage';
import NavBar from './NavBar';
import ProjectsPage from './ProjectsPage';
import SkillsPage from './SkillsPage';

let projects;

try {
    const response = await fetch('http://localhost:5000/api/projects/all');
    projects = await response.json();
} catch (error) {
    console.error('Error:', error);
}

export const ACTIONS = {
    DISPLAY_HOME: 'display-home',
    DISPLAY_SKILLS: 'display-skills',
    DISPLAY_PROJECTS: 'display-projects',
    DISPLAY_CONTACT: 'display-contact'
}

function reducer(state, { type }) {
    const { Home, Skills, Projects, Contact } = state; 
    
    switch (type) {
        case ACTIONS.DISPLAY_HOME:
            if (Home) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }

            window.location.hash = '';
            return {
                Home: true,
                Skills: false,
                Projects: false,
                Contact: false
            };
        case ACTIONS.DISPLAY_SKILLS:
            if (Skills) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
            
            window.location.hash = '#skills';
            return {
                Home: false,
                Skills: true,
                Projects: false,
                Contact: false
            };
        case ACTIONS.DISPLAY_PROJECTS:
            if (Projects) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }

            window.location.hash = '#projects';
            return {
                Home: false,
                Skills: false,
                Projects: true,
                Contact: false
            };
        case ACTIONS.DISPLAY_CONTACT:
            if (Contact) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }

            window.location.hash = '#contact';
            return {
                Home: false,
                Skills: false,
                Projects: false,
                Contact: true
            };
    }
}

function App() {    
    const [{ Home, Skills, Projects, Contact }, dispatch] = useReducer(reducer, { 
        Home: true, 
        Skills: false, 
        Projects: false,
        Contact: false
    });

    useEffect(() => {
        const hash = window.location.hash;
        
        if (hash === '#skills') {
            dispatch({ type: ACTIONS.DISPLAY_SKILLS });
        } else if (hash === '#projects') {
            dispatch({ type: ACTIONS.DISPLAY_PROJECTS });
        } else if (hash === '#contact') {
            dispatch({ type: ACTIONS.DISPLAY_CONTACT });
        } else {
            dispatch({ type: ACTIONS.DISPLAY_HOME });
        }
    }, []);

    return (
        <div className={styles['App']}>
            <NavBar 
                dispatch={dispatch}
                state={{Home, Skills, Projects, Contact}} />
            {Home && <HomePage className={styles.page} />}
            {Skills && <SkillsPage className={styles.page} projects={projects} />}
            {Projects && <ProjectsPage className={styles.page} projects={projects} />}
            {Contact && <ContactPage className={styles.page} />}
            <Footer 
                dispatch={dispatch}
                state={{Home, Skills, Projects, Contact}} />
        </div>
    );
}

export default App;