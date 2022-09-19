import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';



function Projects() {
  const proyectos = [
    { link: "https://climappte.netlify.app/", name: "Climappte", descripcion: "web del clima donde puedes informarte acerca del clima en cualquier ciudad que desees ", },
    { link: "https://marfilms.netlify.app/", name: "Marfilms", descripcion: "Pagina web donde se muestra un listado de las ultimas peliculas ", },
    { link: "https://climappte.netlify.app/", name: "Quinterest", descripcion: "descripcion del proyecto", }
  ]
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="Projects" id="Projects">
      <h3>
        Projects
      </h3>
      <div className='Projects-wrapper' >
        {
          proyectos.map((proyecto) => (
            <a href={proyecto.link} target="_blank" rel="noreferrer" className="Projects-link">
              <div data-aos="zoom-in-up" className='Projects-item'>
                <p className="Projects-item-name">{proyecto.name}</p>
                <div className='Projects-descripcion'>
                 
                  <p >{proyecto.descripcion}</p>
              
                  
                </div>
              </div>
            </a>

          ))
        }

      </div>
    </div>
  );
}

export default Projects;
