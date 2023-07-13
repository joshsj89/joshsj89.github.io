import Project from './Project';

function ProjectsPage(props) {
    return (
        <div className={`${props.className} projects-page`}>
            <h1>Projects</h1>
            <div className="project-list">
                {props.projects.map((project, index) => {
                    return <Project project={project} />;
                })
            }
            </div>
        </div>
    );
}

export default ProjectsPage;