import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Home() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className="HomeBackground">
            <svg className='Waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fafafa" fillOpacity="1" d="M0,224L60,202.7C120,181,240,139,360,149.3C480,160,600,224,720,234.7C840,245,960,203,1080,197.3C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className="Home" id="hero" data-aos="zoom-out">
                <div className="Home-right">
                    <img src={require('../assets/images/perfil.jpg')} alt="perfil" />
                </div>
                <div className="Home-left">
                    <h1>
                        <span style-='--content: "Develop."'> HI! </span>
                        <span className="Name" > Im Marvin Henriquez </span>
                        <span > Web Developer </span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
