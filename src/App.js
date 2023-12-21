
import './App.css';
import Layout from './component/Layout/Layout';
import About from './pages/About/About';
import Techstack from './pages/Techstack/Techstack';

function App() {
  return (
    <>
    <Layout/> 
    <div class="container">
      <About/>
    </div>
    <Techstack/>
    </>
  );
}

export default App;
