function SkillsPage(props) {
    return (
        <div className={`${props.className} skills`}>
            <h1>Skills</h1>
            <div className="skills-container">
                <div className="skill">
                    <span className="two-icons">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg"
                            alt="C" />
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" 
                            alt="C++" />
                    </span>
                    <h4>C/C++</h4>
                    <p><strong>C++</strong> was my very first language. I started learning it myself in my free time in high school. All my intro programming classes at SCU taught <strong>C</strong>, so I was already familiar when I started.</p>
                </div>
                <div className="skill">
                    <img 
                        src="images/javascript_logo_new_296x296_transparentjs.png" 
                        alt="JavaScript" />
                    <h4>JavaScript</h4>
                    <p><strong>JavaScript</strong> was my third language. I got interested in learning after looking at some open-source code. I learned it and started working at multiple projects including the Canvas Module PDF Downloader.</p>
                </div>
                <div className="skill">
                    <span className="two-icons">
                        <img 
                            src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" 
                            alt="HTML5" />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                            alt="CSS3" />
                    </span>
                    <h4>HTML/CSS</h4>
                    <p><strong>HTML/CSS</strong> was what I used to create some web extensions and design this site.</p>
                </div>
                <div className="skill">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
                        alt="Python" />
                    <h4>Python</h4>
                    <p>I learned <strong>Python</strong> after already being very comfortable with C++. I learned it mainly through tutoring new programmers.</p>
                </div>
                <div className="skill">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" 
                        alt="C#" />
                    <h4>C#</h4>
                    <p>I learned <strong>C#</strong> while creating Polaris in <strong>Unity</strong>.</p>
                </div>
                <div className="skill">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                        alt="React" />
                    <h4>React</h4>
                    <p>I created this website with <strong>React</strong>.</p>
                </div>
                <div className="skill">
                    <span className="two-icons">
                        <img 
                            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" 
                            alt="Git" />
                        <img
                            src="images/github-mark.png"
                            alt="GitHub" />
                    </span>
                    <h4>Git</h4>
                    <p>I've used <strong>Git</strong> for almost all of my projects, so I am very familiar with it.</p>
                </div>
                <div className="skill">
                    <img 
                        src="images/unity_logo_black.svg" 
                        alt="Unity" />
                    <h4>Unity</h4>
                    <p>My team and I used <strong>Unity</strong> to create Polaris.</p>
                </div>
                <div className="skill">
                    <img 
                        src="https://nodejs.dev/static/images/brand/logos-js-right/dark.svg" 
                        alt="Node.js" />
                    <h4>Node.js</h4>
                    <p>As I learned JavaScript, I utilized <strong>Node.js</strong> and its REPL.</p>
                </div>
            </div>
        </div>
    );
}

export default SkillsPage;