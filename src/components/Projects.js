import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';




function Projects() {
  const proyectos = [
    { id: 1, link: "https://marfilms.netlify.app/", name: "Marfilms", descripcion: "Web page where a list of the latest movies is shown, you can also search for a specific one and it shows you recommended movies.", tecnologias: ["React Js"] },
    { id: 2, link: "https://climappte.netlify.app/", name: "Climappte", descripcion: "Weather website where you can find out about the weather in any city you want.", tecnologias: ["React Js"] },    
    { id: 3, link: "https://quinterest.netlify.app/", name: "Quinterest", descripcion: "This Application is based on Pinterest where you can register to explore images of other users, upload your own images and save the ones you like the most.", tecnologias: ["React Js", "Node Js", "MongoDB", "Cloudinary"] }
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

                  <div className='Tecnologias'>
                    {
                      proyecto.tecnologias.map((tecnologia) => (
                        <div className='Tecnologia'>
                          <p>{tecnologia}</p>
                        </div>
                      ))
                    }


                  </div>
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
