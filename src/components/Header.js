import React from 'react';
import { Link } from "react-scroll";


function Header() {



  const showMenu = () => {
    const nav = document.querySelector("Nav")
      nav.classList.toggle('activo');  
  }
  const showMenu2 = () => {
    console.log("click")
    const nav = document.querySelector("Nav")
 
    if(nav?.classList[1]){
      console.log("aca tiene que dirigir a un lugar y quitar el menu");
      nav.classList.toggle('activo');
    }
    
  }

  return (

    <header className="App-header">

      <div className="MenuH" onClick={showMenu}> <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" /></svg>
      </div>
      <nav className="navbar" >

        <ul>
          <li className="nav-item" > <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={showMenu2}>Home</Link> </li>
          <li className="nav-item"><Link to="About" spy={true} smooth={true} offset={-120} duration={500}  onClick={showMenu2}>About</Link></li>
          <li className="nav-item"><Link to="Projects" spy={true} smooth={true} offset={-80} duration={500} onClick={showMenu2}>Projects</Link></li>
          <li className="nav-item"><Link to="Contact" spy={true} smooth={true} offset={-100} duration={500} onClick={showMenu2}>Contact</Link></li>
        </ul>

      </nav>

    </header>

  );
}

export default Header;
