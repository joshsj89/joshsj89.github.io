import { useEffect, useRef } from "react";
import {Terminal as XTerm} from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import '@xterm/xterm/css/xterm.css';

function Terminal() {
    const terminalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!terminalRef.current) return;

        const term = new XTerm({ 
            cursorBlink: true 
        });
        const fitAddon = new FitAddon();
        term.loadAddon(fitAddon);
        term.open(terminalRef.current);
        fitAddon.fit();

        const resize = () => {
            fitAddon.fit();

            if (socket.readyState === WebSocket.OPEN) {
                socket.send(JSON.stringify({
                    type: "resize",
                    cols: term.cols,
                    rows: term.rows 
                }));
            }
        };

        window.addEventListener("resize", resize);

        const socket = new WebSocket("wss://shell.joshsapi.com");

        socket.onopen = () => {
            console.log("Connected to the server");
        };

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            switch (message.type) {
                case "output":
                    term.write(message.message);
                    break;
                case "close":
                    term.writeln(`\r\n${message.message}`);
                    break;
                default:
                    console.error("Unknown message type:", message.type);
            }
        };

        term.onData((data) => {
            if (socket.readyState === WebSocket.OPEN) {
                socket.send(JSON.stringify({
                    type: "input",
                    data: data
                }));
            }
        });

        return () => {
            if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING) {
                socket.close();
            }

            term.dispose();
            window.removeEventListener("resize", resize);
        };
    }, [terminalRef]);

    return (
        <div
            ref={terminalRef}
            style={{
                width: "100%",
                height: "100%",
            }}
        ></div>
    );
}

export default Terminal;