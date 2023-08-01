import Skill from './Skill';

let skills = [];
try {
    const response = await fetch('db/skills.json');
    skills = await response.json();
} catch (err) {
    console.error('Error:', err);
}

function SkillsPage(props) {
    return (
        <div className={`${props.className} skills-page`}>
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-row">
                    {skills.map((skill) => {
                        return <Skill skill={skill} key={skill._id} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default SkillsPage;