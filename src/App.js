
import './App.css';
import Layout from './component/Layout/Layout';
import ScrollUpArrow from './component/ScrollUpArrow/ScrollUpArrow';
import { useTheme } from './context/TheamContext';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import Listproject from './pages/Projects/ListofProject/Listproject';
// import ProjectTemplates from './pages/Projects/ListofProjects/ProjectTemplates';
import Projects from './pages/Projects/Projects';
import Techstack from './pages/Techstack/Techstack';
import WorkExp from './pages/WorkExp/WorkExp';

function App() {
  const[theme] = useTheme()
  return (
    <>
    <div id={theme}>

      <Layout />
      <div class="container">
        <About />
      </div>
      <Education />
      <Techstack />
      {/* <Projects/> */}
      <Listproject />
      <WorkExp />
      <Contact />
    </div>
      <ScrollUpArrow />
    </>
  );
}

export default App;
