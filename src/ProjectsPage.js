import Project from './Project';
import styles from './ProjectsPage.module.css';

function ProjectsPage(props) {
    return (
        <div className={`page ${styles['projects-page']}`}>
            <h1>Projects</h1>
            <div className={styles['project-list']}>
                {props.projects.map((project, index) => {
                    return <Project project={project} key={project._id} />;
                })}
            </div>
        </div>
    );
}

export default ProjectsPage;