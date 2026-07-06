import { useState, useEffect } from 'react';
import styles from './App.module.css';
import ContactPage from './ContactPage';
import Footer from './Footer';
import HomePage from './HomePage';
import NavBar from './NavBar';
import ProjectInterface from './Interfaces/ProjectInterface';
import ProjectsPage from './ProjectsPage';
import SkillInterface from './Interfaces/SkillInterface';
import SkillsPage from './SkillsPage';
import { NameProvider } from './Contexts/NameContext';
import { Routes, Route } from 'react-router-dom';

function App() {    
    const [projects, setProjects] = useState<ProjectInterface[]>([]);
    const [skills, setSkills] = useState<SkillInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const [projectsResponse, skillsResponse] = await Promise.all([
                fetch('https://joshsapi.com/projects/all'),
                fetch('https://joshsapi.com/skills/all')
            ]);

            const projectsData = await projectsResponse.json();
            const skillsData = await skillsResponse.json();

            setProjects(projectsData);
            setSkills(skillsData);
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <div className={styles['App']}>
            <NameProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/skills" element={<SkillsPage skills={skills} />} />
                    <Route path="/projects" element={<ProjectsPage projects={projects} />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </NameProvider>
        </div>
    );
}

export default App;