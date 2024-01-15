import ProjectInterface from './Interfaces/ProjectInterface';
import styles from './Project.module.css';

function Project({ project, key }: { project: ProjectInterface, key?: string }) {
    return (
        <div className={styles.project}>
            <div className={styles['project-image']}>
                <img src={project.image} alt={project.name} />
            </div>
            <div className={styles['project-content']}>
                <a 
                    className={styles['project-name']}
                    href={project.link !== '' ? project.link : undefined}
                    target="_blank" rel="noreferrer" >{project.name}</a>
                <p className={styles['project-description']}>{project.description}</p>
                <ul className={styles['project-tech']}>
                    {project.tech.map((tech) => {
                        return <li>{tech}</li>
                    })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Project;