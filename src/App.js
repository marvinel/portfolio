
import './App.css';


import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


function App() {

 
  const scrollUp = () => {


    var currentScroll = document.documentElement.scrollTop;
    
    if(currentScroll > 0){
      window.requestAnimationFrame(scrollUp)
      window.scrollTo(0, currentScroll - (currentScroll / 10))
      
    }
  }
  
  window.onscroll = ()=>{
      var scroll= document.documentElement.scrollTop;
      const buttonuup = document.getElementById("button-up")
      if(scroll > 100){
       
        buttonuup.style.transform = "scale(1)"            
      }else if(scroll < 100){
       
        buttonuup.style.transform = "scale(0)"      
      }
    }
   
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Projects  />
        <Contact />

        <div id='button-up' onClick={scrollUp}> 
          <FontAwesomeIcon icon={faAngleUp} />       
        </div>
        <div>
          <p>
          Developed and designed with ❤️ by Marvin Henriquez
          </p>
        </div>
    </div>
  );
}

export default App;
