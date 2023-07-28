function Project({ project, image, key }) {
    return (
        <div className="project">
            <div className="project-image">
                <img src={image} alt={project.name} />
            </div>
            <div className="project-content">
                <a 
                    className="project-name"
                    href={project.link}
                    target="_blank" rel="noreferrer" >{project.name}</a>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech">
                    {project.tech.map((tech, index) => {
                        return <li>{tech}</li>
                    })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Project;