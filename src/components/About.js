
import Button from '@mui/material/Button';
import PictureAsPdf from '@mui/icons-material/PictureAsPdf';

function About() {
    return (
        <div className="About" id="About">
            <h3>Who am i?</h3>
            <a href="./pdf" target="_blank"><Button color="primary" variant="outlined" endIcon={<PictureAsPdf />}>
                Ver PDF
            </Button> </a>

        </div>
    );
}

export default About;
