import About from './About';
import ResumeButton from './ResumeButton';

function HomePage(props) {
    return (
        <div className={`${props.className} home-page`}>
            <About />
            <ResumeButton />
        </div>
    );
}

export default HomePage;