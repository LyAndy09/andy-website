import './App.css';
import AboutMe from './components/AboutMe'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="Wrapper">
      <Profile />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
