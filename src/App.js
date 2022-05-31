
import './App.css';


import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {


  return (
    <div className="App">

     
        <Header />
        <Home />
        <About />
        <Projects  />
        <Contact />
      
    </div>
  );
}

export default App;
