import PDFInterface from './Interfaces/PDFInterface';
import styles from './ResumeButton.module.css';

function ResumeButton({ downloadID }: { downloadID: string }) {
    const handleClick = async () => {
        try {
            const response = await fetch(`https://joshsj89-1d7a9e7057c7.herokuapp.com/api/pdf/download/${downloadID}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const resume: PDFInterface = await response.json();

            let date: string = '';
        
            // YYYY-MM-DDTHH:MM:SS.MSSZ -> YYYY_MM_DD
            if (typeof resume.createdAt === 'string') {
                date = resume.createdAt.slice(0, 10).replace(/-/g, '_');
            } else if (resume.createdAt instanceof Date) {
                date = resume.createdAt.toISOString().slice(0, 10).replace(/-/g, '_');
            }

            const blob = new Blob([new Uint8Array(resume.data.data)], {type: 'application/pdf'});
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `Josh_Kindarara_Resume_${date}.pdf`;
            link.click();
        } catch (error) {
            console.error('Error Downloading Resume: ', error);
        }
    }

    return (
        <button 
            className={styles["resume-button"]}
            onClick={handleClick}
            >Resume</button>
    );
}

export default ResumeButton;