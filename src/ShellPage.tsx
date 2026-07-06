import { Fragment } from 'react';

import styles from './ShellPage.module.css';
import Terminal from './Terminal';

function ShellPage() {
    return (
        <div className={`page ${styles['shell-page']}`}>
            {/* Left Pane: Terminal */}
            <div className={styles['terminal-pane']}>
                <Terminal />
            </div>

            {/* Right Pane: System Docs & Quick Start */}
            <div className={styles['docs-pane']}>
                <h3>**SYSTEM DIAGNOSTICS & QUICK START**</h3>
                <hr className={styles['divider']} />
                <p>
                    Welcome to Josh, a Bash-like shell that I built in C.
                </p>

                <h3>**QUICK COMMANDS (TRY TYPING THESE):**</h3>
                <hr className={styles['divider']} />
                <p>A list of common commands to begin your exploration:</p>
                
                <ul className={styles['command-list']}>
                    <li><code>ls</code> — View directory contents</li>
                    <li><code>cd ./source</code> — Change directory</li>
                </ul>

                {/* Simulated Terminal Text Configuration Box */}
                <div className={styles['config-box']}>
                    <span className={styles['comment']}>$ cat README.txt</span>
                    <pre>{`Welcome to Josh Shell!

Try these commands:

    ls
    pwd
    cat README.txt
    ls projects
    cat examples/pipes.txt
    grep shell README.txt

Supported Features

- pipes
- redirection
- variables
- command substitution
- quoting

Type "help" for more information.`}</pre>
                </div>
            </div>
        </div>
    );
}

export default ShellPage;