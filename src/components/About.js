import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import Button from '@mui/material/Button';
import PictureAsPdf from '@mui/icons-material/PictureAsPdf';

function About() {

    const tecnologias = [
        { tec: "Github", img: require('../assets/images/skills/github.png') },
        { tec: "Html", img: require('../assets/images/skills/html-5.png') },
        { tec: "CSS", img: require('../assets/images/skills/css-3.png') },
        { tec: "JavaScript", img: require('../assets/images/skills/js.png') }]

    useEffect(() => {
        Aos.init({ duration: 2500 });
    }, [])

    return (
        <>
            <h3>About Me</h3>
            <div className="About" id="About">
                <div className='Skill-Section' data-aos="fade-right">
                    <h3>Skills</h3>
                    <div className='Skills' >
                        {
                            tecnologias.map((item,i) => (
                                <div className="Skill-item" key={i}>
                                    <span id='Tooltip' className='Tooltip'> {item.tec}</span>

                                    <img src={item.img} alt={item.tec} width="50px" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='Me'>
                    <h3>Who am i?</h3>
                    <p>Systems engineer passionate about web development focused and
                        trained to provide the best user experience with excellent criteria in
                        design, construction and execution of technology projects with the
                        desire to continue learning and
                        overcome new challenges.</p>
                    <a href="./pdf" target="_blank" ><Button variant="contained" endIcon={<PictureAsPdf />}>
                        RESUME
                    </Button> </a>
                </div>
            </div>
        </>
    );
}

export default About;
