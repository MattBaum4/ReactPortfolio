import NavSection from './Components/Nav-Section';
import MainPage from './Components/Main-Page';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div className='app-container'>
    <NavSection />
    <MainPage />

    </div>
    </Router>
      );
}

export default App;
