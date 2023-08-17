const formatDescription = (description) => {
    const boldPattern = /\{(.*?)\}/g;
    const linkPattern = /\[(.*?)\]\((.*?)\)/g

    const formattedDescription = description.replace(boldPattern, '<strong>$1</strong>');
    const finalDescription = formattedDescription.replace(linkPattern, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');

    return finalDescription;
}

function Skill({ skill }) {
    return (
        <div className="skill skills-col">
            <span className={`skill-images ${skill.classes}`}>
                {skill.images.map((image, index) => {
                    return <img src={image} alt={skill.alts[index]} key={index} />
                })}
            </span>
            <h4 className="skill-name">{skill.name}</h4>
            <p className="skill-description" dangerouslySetInnerHTML={{ __html: formatDescription(skill.description) }}></p>
        </div>
    );
}

export default Skill;