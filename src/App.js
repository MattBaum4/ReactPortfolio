import NavSection from './Components/Nav-Section';
import MainPage from './Components/Main-Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import ContactSection from './Components/Contact-Section';
import AboutSection from './Components/About-Section';
import ExperienceSection from './Components/Experience-Section';

function App() {
  return (
    <Router>
    <div className='app-container'>
    <NavSection />
    <Routes>
    <Route path='/' exact Component={MainPage}/>
    <Route path='/about' exact Component={AboutSection}/>
    <Route path='/experience' exact Component={ExperienceSection}/>
    <Route path='/contact' exact Component={ContactSection}/>

    </Routes> 

    </div>
    </Router>
      );
}

export default App;
