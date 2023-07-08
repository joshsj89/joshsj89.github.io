import { useReducer } from 'react';
import SkillsPage from './SkillsPage';
import HomePage from './HomePage';
import NavBar from './NavBar';
import ProjectsPage from './ProjectsPage';

export const ACTIONS = {
    DISPLAY_HOME: 'display-home',
    DISPLAY_SKILLS: 'display-skills',
    DISPLAY_PROJECTS: 'display-projects'
}

function reducer(state, { type, payload }) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    switch (type) {
        case ACTIONS.DISPLAY_HOME:
            return {
                Home: true,
                Skills: false,
                Projects: false
            };
        case ACTIONS.DISPLAY_SKILLS:
            return {
                Home: false,
                Skills: true,
                Projects: false
            };
        case ACTIONS.DISPLAY_PROJECTS:
            return {
                Home: false,
                Skills: false,
                Projects: true
            };
    }
}

function App() {    
    const [{ Home, Skills, Projects }, dispatch] = useReducer(reducer, { 
        Home: true, 
        Skills: false, 
        Projects: false 
    });

    if (Home) {
        return (
            <div className="App">
                <NavBar 
                    dispatch={dispatch}
                    state={{Home, Skills, Projects}} />
                <HomePage />
            </div>
        );
    } else if (Skills) {
        return (
            <div className="App">
                <NavBar 
                    dispatch={dispatch}
                    state={{Home, Skills, Projects}} />
                <SkillsPage />
            </div>
        );
    } else if (Projects) {
        return (
            <div className="App">
                <NavBar 
                    dispatch={dispatch}
                    state={{Home, Skills, Projects}} />
                <ProjectsPage />
            </div>
        );
    }
}

export default App;