
import './App.css';
import Layout from './component/Layout/Layout';
import ScrollUpArrow from './component/ScrollUpArrow/ScrollUpArrow';
import MobileNav from './component/mobilenav/MobileNav';
import { useTheme } from './context/TheamContext';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import Footer from './pages/Footer/Footer';
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
      <MobileNav/>
      <Layout />
      
      <div class="container">
        <About />
      </div>
      <WorkExp />
      <Listproject />
      <Techstack />
      <Education />
      {/* <Projects/> */}
      <Contact />
      <Footer/>
    </div>
      <ScrollUpArrow />
    </>
  );
}

export default App;
