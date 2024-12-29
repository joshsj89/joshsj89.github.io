import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// React 17 and earlier
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// , document.getElementById('root'));

// React 18
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);