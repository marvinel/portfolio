import { Link } from "react-scroll";

function Header() {
    return (

        <header className="App-header">
            <nav className="navbar" >
                <ul>
                    <li className="nav-item"> <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>Home</Link> </li>
                    <li className="nav-item"><Link to="About" spy={true} smooth={true} offset={0} duration={500}>About</Link></li>
                    <li className="nav-item"><Link to="Projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link></li>
                    <li className="nav-item"><Link to="Contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link></li>
                </ul>
            </nav>

        </header>

    );
}

export default Header;
