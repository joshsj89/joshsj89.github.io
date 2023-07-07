import Headshot from './Headshot'
import NavBar from './NavBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <div>
                <div className="intro">
                    <h1 className="name">Josh Kindarara</h1>
                    <h2>Software Engineer</h2>
                    <Headshot />
                </div>
            </div>
        </div>
    );
}

export default App;