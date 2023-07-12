function SkillsPage(props) {
    return (
        <div className={`${props.className} skills-page`}>
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-row">
                    <div className="skill skills-col">
                        <span className="skill-images two-icons">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg"
                                alt="C" />
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" 
                                alt="C++" />
                        </span>
                        <h4 className="skill-name">C/C++</h4>
                        <p className="skill-description"><strong>C++</strong> was my very first language. I started learning it myself in my free time in high school. All my intro programming classes at SCU taught <strong>C</strong>, so I was already familiar when I started.</p>
                    </div>
                    <div className="skill skills-col">
                        <span className="skill-images one-icon">
                            <img 
                                src="images/javascript_logo_new_296x296_transparentjs.png" 
                                alt="JavaScript" />
                        </span>
                        <h4 className="skill-name">JavaScript</h4>
                        <p className="skill-description"><strong>JavaScript</strong> was my third language. I got interested in learning after looking at some open-source code. I learned it and started working on multiple projects including the <a href={props.projects[2].link} target="_blank">Canvas Module PDF Downloader</a>.</p>
                    </div>
                    <div className="skill skills-col">
                        <span className="skill-images two-icons">
                            <img 
                                src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" 
                                alt="HTML5" />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                                alt="CSS3" />
                        </span>
                        <h4 className="skill-name">HTML/CSS</h4>
                        <p className="skill-description"><strong>HTML/CSS</strong> was what I used to create <a href="#projects" target="_blank">some web extensions</a> and design <a href="/">this site</a>.</p>
                    </div>
                    <div className="skill skills-col">
                        <span className="skill-images one-icon">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
                                alt="Python" />
                        </span>
                        <h4 className="skill-name">Python</h4>
                        <p className="skill-description">I learned <strong>Python</strong> after already being very comfortable with <strong>C++</strong>. I learned it mainly through tutoring new programmers.</p>
                    </div>
                    <div className="skill skills-col">
                        <span className="skill-images one-icon">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" 
                                alt="C#" />
                        </span>
                        <h4 className="skill-name">C#</h4>
                        <p className="skill-description">I learned <strong>C#</strong> while creating <a href={props.projects[1].link} target="_blank">Polaris</a> in <strong>Unity</strong>.</p>
                    </div>
                    <div className="skill skills-col">
                        <span className="skill-images one-icon">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                                alt="React" />
                        </span>
                        <h4 className="skill-name">React</h4>
                        <p className="skill-description">I created <a href="/">this website</a> with <strong>React</strong>.</p>
                    </div>
                    <div className="skill skills-col">
                        <span className="skill-images two-icons">
                            <img 
                                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" 
                                alt="Git" />
                            <img
                                src="images/github-mark.png"
                                alt="GitHub" />
                        </span>
                        <h4 className="skill-name">Git</h4>
                        <p className="skill-description">I've used <strong>Git</strong> for almost all of <a href="#projects" target="_blank">my projects</a>, so I am very familiar with it.</p>
                    </div>
                    <div className="skill skills-col">
                        <span className="skill-images one-icon wide-logo">
                            <img 
                                src="images/unity_logo_black.svg" 
                                alt="Unity" />
                        </span>
                        <h4 className="skill-name">Unity</h4>
                        <p className="skill-description">My team and I used <strong>Unity</strong> to create <a href={props.projects[1].link} target="_blank">Polaris</a>.</p>
                    </div>
                    <div className="skill skills-col">
                        <span className="skill-images one-icon wide-logo">
                            <img 
                                src="https://nodejs.dev/static/images/brand/logos-js-right/dark.svg" 
                                alt="Node.js" />
                        </span>
                        <h4 className="skill-name">Node.js</h4>
                        <p className="skill-description">As I learned <strong>JavaScript</strong>, I utilized <strong>Node.js</strong> and its REPL.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsPage;