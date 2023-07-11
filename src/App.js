import { useEffect, useReducer } from 'react';
import ContactPage from './ContactPage';
import Footer from './Footer';
import HomePage from './HomePage';
import NavBar from './NavBar';
import ProjectsPage from './ProjectsPage';
import SkillsPage from './SkillsPage';

export const ACTIONS = {
    DISPLAY_HOME: 'display-home',
    DISPLAY_SKILLS: 'display-skills',
    DISPLAY_PROJECTS: 'display-projects',
    DISPLAY_CONTACT: 'display-contact'
}

function reducer(state, { type, payload }) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    switch (type) {
        case ACTIONS.DISPLAY_HOME:
            window.location.hash = '';
            return {
                Home: true,
                Skills: false,
                Projects: false,
                Contact: false
            };
        case ACTIONS.DISPLAY_SKILLS:
            window.location.hash = '#skills';
            return {
                Home: false,
                Skills: true,
                Projects: false,
                Contact: false
            };
        case ACTIONS.DISPLAY_PROJECTS:
            window.location.hash = '#projects';
            return {
                Home: false,
                Skills: false,
                Projects: true,
                Contact: false
            };
        case ACTIONS.DISPLAY_CONTACT:
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
            dispatch({ type: ACTIONS.DISPLAY_SKILLS, payload: { state: { Home, Skills, Projects, Contact } } });
        } else if (hash === '#projects') {
            dispatch({ type: ACTIONS.DISPLAY_PROJECTS, payload: { state: { Home, Skills, Projects, Contact } } });
        } else if (hash === '#contact') {
            dispatch({ type: ACTIONS.DISPLAY_CONTACT, payload: { state: { Home, Skills, Projects, Contact } } });
        } else {
            dispatch({ type: ACTIONS.DISPLAY_HOME, payload: { state: { Home, Skills, Projects, Contact } } });
        }
    }, []);

    return (
        <div className="App">
            <NavBar 
                dispatch={dispatch}
                state={{Home, Skills, Projects, Contact}} />
            {Home && <HomePage className="page" />}
            {Skills && <SkillsPage className="page" />}
            {Projects && <ProjectsPage className="page" />}
            {Contact && <ContactPage className="page" />}
            <Footer 
                dispatch={dispatch}
                state={{Home, Skills, Projects, Contact}} />
        </div>
    );
}

export default App;