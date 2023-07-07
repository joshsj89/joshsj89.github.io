import { useReducer } from 'react';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import NavBar from './NavBar';
import ProjectsPage from './ProjectsPage';

export const ACTIONS = {
    DISPLAY_HOME: 'display-home',
    DISPLAY_ABOUT: 'display-about',
    DISPLAY_PROJECTS: 'display-projects'
}

function reducer(state, { type, payload }) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    switch (type) {
        case ACTIONS.DISPLAY_HOME:
            return {
                Home: true,
                About: false,
                Projects: false
            };
        case ACTIONS.DISPLAY_ABOUT:
            return {
                Home: false,
                About: true,
                Projects: false
            };
        case ACTIONS.DISPLAY_PROJECTS:
            return {
                Home: false,
                About: false,
                Projects: true
            };
    }
}

function App() {    
    const [{ Home, About, Projects }, dispatch] = useReducer(reducer, { 
        Home: true, 
        About: false, 
        Projects: false 
    });

    if (Home) {
        return (
            <div className="App">
                <NavBar 
                    dispatch={dispatch}
                    state={{Home, About, Projects}} />
                <HomePage />
            </div>
        );
    } else if (About) {
        return (
            <div className="App">
                <NavBar 
                    dispatch={dispatch}
                    state={{Home, About, Projects}} />
                <AboutPage />
            </div>
        );
    } else if (Projects) {
        return (
            <div className="App">
                <NavBar 
                    dispatch={dispatch}
                    state={{Home, About, Projects}} />
                <ProjectsPage />
            </div>
        );
    }
}

export default App;