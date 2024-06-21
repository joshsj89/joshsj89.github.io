import { useState, useEffect, useReducer } from 'react';
import styles from './App.module.css';
import Actions from './Interfaces/Actions';
import ContactPage from './ContactPage';
import Footer from './Footer';
import HomePage from './HomePage';
import NavBar from './NavBar';
import ProjectInterface from './Interfaces/ProjectInterface';
import ProjectsPage from './ProjectsPage';
import ScreenState from './Interfaces/ScreenState';
import SkillInterface from './Interfaces/SkillInterface';
import SkillsPage from './SkillsPage';

let projects: ProjectInterface[];
let skills: SkillInterface[];

const fetchProjects = async () => {
    try {
        const response = await fetch('https://joshsj89-1d7a9e7057c7.herokuapp.com/api/projects/all');
        projects = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

const fetchSkills = async () => {
    try {
        const response = await fetch('https://joshsj89-1d7a9e7057c7.herokuapp.com/api/skills/all');
        skills = await response.json();
    } catch (err) {
        console.error('Error:', err);
    }
}

export const ACTIONS: Actions = {
    DISPLAY_HOME: 'display-home',
    DISPLAY_SKILLS: 'display-skills',
    DISPLAY_PROJECTS: 'display-projects',
    DISPLAY_CONTACT: 'display-contact'
}

function reducer(state: ScreenState, { type }) {
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
    const [{ Home, Skills, Projects, Contact }, dispatch]: any = useReducer(reducer, { // temporary type annotation
        Home: true, 
        Skills: false, 
        Projects: false,
        Contact: false
    }); // Check proper syntax for type annotation

    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await fetchProjects();
            await fetchSkills();
            setDataFetched(true);
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (dataFetched) {
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
        }
    }, [dataFetched]);

    return (
        <div className={styles['App']}>
            <NavBar 
                dispatch={dispatch}
                state={{Home, Skills, Projects, Contact}} />
            {Home && <HomePage />}
            {Skills && <SkillsPage skills={skills} />}
            {Projects && <ProjectsPage projects={projects} />}
            {Contact && <ContactPage />}
            <Footer 
                dispatch={dispatch}
                state={{Home, Skills, Projects, Contact}} />
        </div>
    );
}

export default App;