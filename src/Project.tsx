import ProjectInterface from './Interfaces/ProjectInterface';
import styles from './Project.module.css';
import NavLinkButton from './NavLinkButton';

function Project({ project }: { project: ProjectInterface }) {
    const isInternal = project.link.startsWith(window.location.origin);
    const newLink = isInternal ? '/' + project.link.replace(new RegExp(`^${window.location.origin}/#/?`), '') : project.link;

    return (
        <div className={styles.project}>
            <div className={styles['project-image']}>
                <img src={project.image} alt={project.name} />
            </div>
            <div className={styles['project-content']}>
                {isInternal ? (
                    <NavLinkButton
                        className={`${styles['project-name']} ${styles['link-button']}`}
                        to={newLink}
                    >
                        {project.name}
                    </NavLinkButton>
                ) : (
                    <a
                        className={styles['project-name']}
                        href={project.link || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.name}
                    </a>
                )}
                <p className={styles['project-description']}>{project.description}</p>
                <ul className={styles['project-tech']}>
                    {project.tech.map((tech, index) => {
                        return <li key={index}>{tech}</li>
                    })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Project;