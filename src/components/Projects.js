import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


import Card from '@mui/material/Card';
function Projects() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="Projects" id="Projects">
      <h3>
        Projects
      </h3>
      <div className='Container-projects' >
        <Card className='Card' data-aos="zoom-in-up" variant="outlined">Projects 1</Card>
        <Card className='Card' data-aos="zoom-in-up" variant="outlined">Projects 2</Card>
        <Card className='Card' data-aos="zoom-in-up" variant="outlined">Projects 3</Card>
        <Card className='Card' data-aos="zoom-in-up" variant="outlined">Projects 4</Card>
        <Card className='Card' data-aos="zoom-in-up" variant="outlined">Projects 5</Card>

      </div>
    </div>
  );
}

export default Projects;
