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
                <h3>SYSTEM DOCUMENTATION & QUICK START</h3>
                <hr className={styles['divider']} />
                <p>
                    Welcome to <b>Josh</b>, a Bash-inspired Unix shell written entirely in C. 
                    It features a custom parser, command-line editor, history system, 
                    expansion engine, and execution pipeline. While it supports many 
                    familiar shell features, every stage of processing—from reading 
                    keystrokes to launching processes—has been implemented from scratch.
                </p>
                <p>
                    Every command you type is processed by my own tokenizer, parser, expansion 
                    engine, and executor before the operating system runs it. The goal of this 
                    project is to understand—and recreate—the core mechanics behind modern Unix 
                    shells.
                </p>

                <h3>QUICK COMMANDS (TRY TYPING THESE):</h3>
                <hr className={styles['divider']} />
                <p>A list of common commands to begin your exploration:</p>
                
                <ul className={styles['command-list']}>
                    <li><code>cat README.txt</code> — Display the contents of README.txt</li>
                    <li><code>pwd</code> — Print working directory</li>
                    <li><code>ls</code> — View directory contents</li>
                    <li><code>ls --color=always</code> — View directory contents with colors</li>
                    <li><code>cd ./source</code> — Change directory</li>
                    <li><code>cd ..</code> — Move up one directory</li>
                    <li><code>echo "$(ls)"</code> — List directory contents</li>
                    <li><code>history</code> — Show command history</li>
                </ul>

                {/* Simulated Terminal Text Configuration Box */}
                {/* <div className={styles['config-box']}>
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
                </div> */}

                <h3>HOW THE SHELL WORKS:</h3>
                <hr className={styles['divider']} />
                <p>This shell is implemented in C using POSIX system calls and standard Unix APIS, including:</p>
                
                <ol className={styles['command-list']}>
                    <li>Line Editing</li>
                        <ul>
                            <li>Reads keyboard input in raw terminal mode.</li>
                            <li>Supports cursor movement, history navigation, and tab completion.</li>
                        </ul>
                    <li>Tokenization</li>
                        <ul>
                            <li>Splits the input into tokens while respecting quotes, escapes, and nested command substitutions.</li>
                        </ul>
                    <li>Parsing</li>
                        <ul>
                            <li>Builds an intermediate representation of the command and validates shell syntax.</li>
                        </ul>
                    <li>Expansion</li>
                        <ul>
                            <li>Uses the intermediate representation for expansion in order to prevent rescanning of the tokens.</li>
                            <li>Performs shell expansions, including:
                                <ul>
                                    <li>Tilde expansion (<code>~/</code>)</li>
                                    <li>Variable expansion (<code>$var</code>)</li>
                                    <li>Command substitution (<code>$(command)</code>)</li>
                                    <li>Arithmetic expansion (<code>$((expression))</code>)</li>
                                    <li>Quote removal</li>
                                </ul>
                            </li>
                        </ul>
                    <li>Execution</li>
                        <ul>
                            <li>Built-in commands execute directly within the shell.</li>
                            <li>External programs are launched using <code>fork()</code> and <code>execvp()</code>.</li>
                            <li>The parent shell waits for the child process to finish before displaying the next prompt.</li>
                        </ul>
                </ol>

                <h3>IMPLEMENTATION:</h3>
                <hr className={styles['divider']} />
                <p>This shell is implemented in C using POSIX system calls and standard Unix APIS, including:</p>
                
                <ul className={styles['command-list']}>
                    <li><code>fork()</code></li>
                    <li><code>execvp()</code></li>
                    <li><code>waitpid()</code></li>
                    <li><code>chdir()</code></li>
                    <li><code>getcwd()</code></li>
                    <li><code>termios</code> (for raw terminal input)</li>
                    <li><code>pipe()</code></li>
                    <li><code>dup2()</code></li>
                </ul>
            </div>
        </div>
    );
}

export default ShellPage;