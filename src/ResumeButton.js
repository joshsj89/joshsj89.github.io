import React from 'react'

function ResumeButton({ downloadID }) {
    const handleClick = async () => {
        try {
            const response = await fetch(`https://joshsj89-1d7a9e7057c7.herokuapp.com/api/pdf/download/${downloadID}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const resume = await response.json();
        
            // YYYY-MM-DDTHH:MM:SS.MSSZ -> YYYY_MM_DD
            const date = resume.createdAt.slice(0, 10).replace(/-/g, '_');

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
            className="resume-button"
            onClick={handleClick}
            >Resume</button>
    );
}

export default ResumeButton;