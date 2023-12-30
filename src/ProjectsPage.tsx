import Project from './Project';
import ProjectInterface from './Interfaces/ProjectInterface';
import styles from './ProjectsPage.module.css';

function ProjectsPage({ projects }: { projects: ProjectInterface[]}) {
    return (
        <div className={`page ${styles['projects-page']}`}>
            <h1>Projects</h1>
            <div className={styles['project-list']}>
                {projects.map((project) => {
                    return <Project project={project} key={project._id} />;
                })}
            </div>
        </div>
    );
}

export default ProjectsPage;