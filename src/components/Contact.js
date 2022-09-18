import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Swal from 'sweetalert2'
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4ue7978', 'template_anw86go', form.current, 'RHmO-t5Vfs4Lnfq77')
            .then((result) => {
                console.log(result.text);
                console.log("se envio el mensaje")
                Swal.fire({
                    title: 'Send!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            });
    };

    return (
        <div className="Contact" id="contact">
            <h3>
                Contact
            </h3>
            <div className='Contact-section'>
                <form className='form' ref={form} onSubmit={sendEmail}>
                    <div className='Form-item'>
                        <label>Name</label>
                        <TextField className='Form-Input'
                            name="user_name"                                                 
                        />
                    </div>
                    <div className='Form-item'>
                        <label>Email</label>
                        <TextField className='Form-Input'
                            type="email" name="user_email"                         
                        />
                    </div  >
                    <div className='Form-item'>
                        <label>Message</label>
                        <TextField className='Form-Input'
                            name="message"
                            multiline
                            rows={4}                   
                        />
                    </div>
                    <Button className='Form-item' variant="contained" type='submit'>Send</Button>
                </form>
                <div>
                    <a href='https://www.linkedin.com/in/marvinhenriquez/' rel="noreferrer" target="_blank">
                        <IconButton aria-label="LinkedIn" color="primary">
                            <LinkedInIcon />
                        </IconButton>
                    </a>
                    <a href='https://github.com/marvinel' rel="noreferrer" target="_blank">
                        <IconButton aria-label="Github"  >
                            <GitHubIcon />
                        </IconButton>
                    </a> 
                    <a href='mailto:marvinshb@gmail.com' rel="noreferrer" target="_blank">
                        <IconButton aria-label="Gmail" color="secondary">
                            <GoogleIcon />
                        </IconButton>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
