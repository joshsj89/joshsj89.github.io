import { useState } from 'react';
import PDFInterface from './Interfaces/PDFInterface';
import styles from './ResumeButton.module.css';

function ResumeButton({ downloadID }: { downloadID: string }) {
    const [progress, setProgress] = useState<number>(0);

    const handleClick = async () => {
        try {
            const response = await fetch(`https://joshsj89-1d7a9e7057c7.herokuapp.com/api/pdf/download/${downloadID}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const resume: PDFInterface = await response.json();

            const contentLength = resume.data.data.length;
            let loaded = 0;

            const stream = new ReadableStream({
                start(controller) {
                    const reader = new Response(resume.data.data).body?.getReader();

                    const read = async () => {
                        const nextChunk = await reader?.read();

                        if (nextChunk === undefined) {
                            controller.close();
                            return;
                        }

                        const { done, value } = nextChunk;

                        if (done) {
                            controller.close();
                            return;
                        }
                        if (value) {
                            loaded += value.byteLength;
                            setProgress((loaded / contentLength) * 100);

                            controller.enqueue(value);

                            read();
                        }
                    }

                    read();
                }
            });

            let date: string = '';
        
            // YYYY-MM-DDTHH:MM:SS.MSSZ -> YYYY_MM_DD
            if (typeof resume.createdAt === 'string') {
                date = resume.createdAt.slice(0, 10).replace(/-/g, '_');
            } else if (resume.createdAt instanceof Date) {
                date = resume.createdAt.toISOString().slice(0, 10).replace(/-/g, '_');
            }

            const blob = new Blob([new Uint8Array(resume.data.data)], {type: 'application/pdf'});
            // const newResponse = new Response(stream);
            // const blob = await newResponse.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `Josh_Kindarara_Resume_${date}.pdf`;
            link.click();

            setTimeout(() => { // Reset progress bar after 5 seconds
                setProgress(0);
            }, 5000);
        } catch (error) {
            console.error('Error Downloading Resume: ', error);
        }
    }

    return (
        <div className={styles["resume-button"]} onClick={handleClick}
        >Resume
            <span className={styles["progress-bar-fill"]} style={{ width: `${progress}%`}} />
        </div>
    );
}

export default ResumeButton;