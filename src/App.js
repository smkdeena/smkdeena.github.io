import './App.css';
import Intro from './components/Intro';
import Background from './components/Background';
import Skills from './components/Skills';
import Exp from './components/Exp';
import Mywork from './components/Mywork';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Intro />
      <Background />
      <Skills />
      <Exp />
      <Mywork />
      <Footer />
    </div>
  );
}

export default App;
