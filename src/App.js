import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './ContactPage';
import Footer from './Footer';
import HomePage from './HomePage';
import NavBar from './NavBar';
import ProjectsPage from './ProjectsPage';
import SkillsPage from './SkillsPage';

let projects;

try {
    const response = await fetch('https://joshsj89-1d7a9e7057c7.herokuapp.com/api/projects/all');
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

            return {
                Home: false,
                Skills: false,
                Projects: false,
                Contact: true
            };
        default:
            return state;
    }
}

function App() {    
    const [{ Home, Skills, Projects, Contact }, dispatch] = useReducer(reducer, { 
        Home: true, 
        Skills: false, 
        Projects: false,
        Contact: false
    });

    return (
        <div className="App">
            <NavBar 
                dispatch={dispatch}
                state={{Home, Skills, Projects, Contact}} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/skills" element={<SkillsPage projects={projects} />} />
                <Route path="/projects" element={<ProjectsPage projects={projects} />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
            <Footer 
                dispatch={dispatch}
                state={{Home, Skills, Projects, Contact}} />
        </div>
    )
}

export default App;