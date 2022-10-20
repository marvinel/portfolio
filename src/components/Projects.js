import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';




function Projects() {
  const proyectos = [
    { id: 1, link: "https://marfilms.netlify.app/", name: "Marfilms", descripcion: "Pagina web donde se muestra un listado de las ultimas peliculas ademas puedes buscar una en especifico y te muestras peliculas recomendadas.", tecnologias: ["Reac Js"] },
    { id: 2, link: "https://climappte.netlify.app/", name: "Climappte", descripcion: "Web del clima donde puedes informarte acerca del clima en cualquier ciudad que desees.", tecnologias: ["React Js"] },    
    { id: 3, link: "https://quinterest.netlify.app/", name: "Quinterest", descripcion: "Esta Aplicacion esta basada en Pinterest donde puedes registrarte para explorar imagenes de otros usuarios, subir tus propias imagenes y guardar las que mas te gusten.", tecnologias: ["React Js", "Node Js", "MongoDB", "Cloudinary"] }
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
