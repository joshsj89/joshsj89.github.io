import About from './About';
import ResumeButton from './ResumeButton';

function HomePage(props) {
    return (
        <div className={`${props.className} home-page`}>
            <About />
            <ResumeButton downloadID="64b92474f706eb41f13dc367" />
        </div>
    );
}

export default HomePage;