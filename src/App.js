import { useReducer } from 'react';
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

    if (Home) {
        return (
            <div className="App">
                <NavBar 
                    dispatch={dispatch}
                    state={{Home, Skills, Projects, Contact}} />
                <HomePage className="page hidden" />
                <Footer 
                    dispatch={dispatch}
                    state={{Home, Skills, Projects, Contact}} />
            </div>
        );
    } else if (Skills) {
        return (
            <div className="App">
                <NavBar 
                    dispatch={dispatch}
                    state={{Home, Skills, Projects, Contact}} />
                <SkillsPage className="page hidden" />
                <Footer 
                    dispatch={dispatch}
                    state={{Home, Skills, Projects, Contact}} />
            </div>
        );
    } else if (Projects) {
        return (
            <div className="App">
                <NavBar 
                    dispatch={dispatch}
                    state={{Home, Skills, Projects, Contact}} />
                <ProjectsPage className="page hidden" />
                <Footer 
                    dispatch={dispatch}
                    state={{Home, Skills, Projects, Contact}} />
            </div>
        );
    } else if (Contact) {
        return (
            <div className="App">
                <NavBar 
                    dispatch={dispatch}
                    state={{Home, Skills, Projects, Contact}} />
                <ContactPage className="page hidden" />
                <Footer 
                    dispatch={dispatch}
                    state={{Home, Skills, Projects, Contact}} />
            </div>
        );
    }
}

export default App;