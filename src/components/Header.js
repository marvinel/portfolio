import React from 'react';
import { Link } from "react-scroll";


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
function Header() {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (

        <header className="App-header">
            <nav className="navbar" >
            <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="About" spy={true} smooth={true} offset={-120} duration={500}>About</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="Projects" spy={true} smooth={true} offset={-80} duration={500}>Projects</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="Contact" spy={true} smooth={true} offset={-100} duration={500} >Contact</Link></MenuItem>
        
      </Menu>
    </div>
                <ul>
                    <li className="nav-item"> <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link> </li>
                    <li className="nav-item"><Link to="About" spy={true} smooth={true} offset={-120} duration={500}>About</Link></li>
                    <li className="nav-item"><Link to="Projects" spy={true} smooth={true} offset={-80} duration={500}>Projects</Link></li>
                    <li className="nav-item"><Link to="Contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
                </ul>
                
            </nav>

        </header>

    );
}

export default Header;
