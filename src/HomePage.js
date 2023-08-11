import About from './About';
import ResumeButton from './ResumeButton';

function HomePage() {
    return (
        <div className={'page home-page'}>
            <About />
            <ResumeButton downloadID="64b92474f706eb41f13dc367" />
        </div>
    );
}

export default HomePage;