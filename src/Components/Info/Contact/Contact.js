import React from 'react';
import './Contact.css'

// Assets
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import tariq from '../../../Assets/Image/tariq.png'

const location = 'Toronto, Canada';
const email = 'tariqsyed.dev@gmail.com';
const linkedin = 'https://www.linkedin.com/in/tariqs1/';
const github = 'https://github.com/tariqsyed1';
const resume = 'https:/google.ca';

const Contact = () => {
    return (
        <div className="contact">
            <div className='picture'><img src={tariq} alt='' style={{'width': '85%'}}/></div>
            <div className='header'>Tariq Syed</div>
            <div className='subheading'>Software Engineer</div>
            <div><a href="hello@tariqsyed.dev">hello@tariqsyed.dev</a></div>
            <div className="links">
                <a href="https://www.github.com/tariqsyed1/" target="_blank" rel="noreferrer" className="social"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/tariqs1" target="_blank" rel="noreferrer" className="social"><LinkedInIcon /></a>
                <a href="https://drive.google.com/file/d/1FEpV0M9gKq3ngc0khsWNYkaohejwVCQZ/view?usp=sharing" target="_blank" rel="noreferrer" className="social"><DescriptionIcon /></a>
            </div>

        </div>
    );
}; 

export default Contact;