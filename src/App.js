
import './App.css';
import Layout from './component/Layout/Layout';
import About from './pages/About/About';
// import ProjectTemplates from './pages/Projects/ListofProjects/ProjectTemplates';
import Projects from './pages/Projects/Projects';
import Techstack from './pages/Techstack/Techstack';

function App() {
  return (
    <>
    <Layout/> 
    <div class="container">
      <About/>
    </div>
    <Techstack/>
    <Projects/>
    
    </>
  );
}

export default App;
