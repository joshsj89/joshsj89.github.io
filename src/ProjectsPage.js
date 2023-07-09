import Project from './Project';

let projects;

try {
    const response = await fetch('db/projects.json');
    projects = await response.json();
} catch (error) {
    console.error('Error:', error);
}

function ProjectsPage() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-list">
                {projects.map((project, index) => {
                    return <Project project={project} key={index} />;
                })
            }
            </div>
        </div>
    );
}

export default ProjectsPage;