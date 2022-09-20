import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';




function Projects() {
  const proyectos = [
    { id: 1, link: "https://climappte.netlify.app/", name: "Climappte", descripcion: "web del clima donde puedes informarte acerca del clima en cualquier ciudad que desees ", },
    { id: 2, link: "https://marfilms.netlify.app/", name: "Marfilms", descripcion: "Pagina web donde se muestra un listado de las ultimas peliculas ", },
    { id: 3, link: "https://climappte.netlify.app/", name: "Quinterest", descripcion: "descripcion del proyecto", }
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
            <a key={proyecto.id} href={proyecto.link} target="_blank" rel="noreferrer" className="Projects-link">

              <div data-aos="zoom-in-up" className='Projects-item' >
                <div className='Pro-it' id={proyecto.name}>
                  <p className="Projects-item-name">{proyecto.name}</p>
                  <div className='Projects-descripcion'>

                    <p >{proyecto.descripcion}</p>


                  </div>
                </div>
              </div>
            </a>



          ))
        }

      </div>
    </div >
  );
}

export default Projects;
