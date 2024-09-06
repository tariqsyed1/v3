import React from 'react';
import './Contact.css'

// Assets
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import tariq from '../../../Assets/Image/tariq.png'
import EmailCopyPaste from './EmailCopyPaste';

const linkedin = 'https://www.linkedin.com/in/tariqs1/';
const github = 'https://github.com/tariqsyed1';
const resume = 'https://drive.google.com/file/d/1JXc-GRUl2I_syoygNSNc8Kx2RO11l1sO/view?usp=sharing';

const Contact = () => {
    return (
        <div className="contact">
            <div className='picture'><img src={tariq} alt=''/></div>
            <div className='header'>Tariq Syed</div>
            <div className='subheading'>Software Engineer</div>
            <div><EmailCopyPaste/></div>
            <div className="links">
                <a href={github} target="_blank" rel="noreferrer" className="social"><GitHubIcon /></a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="social"><LinkedInIcon /></a>
                <a href={resume} target="_blank" rel="noreferrer" className="social"><DescriptionIcon /></a>
            </div>
        </div>
    );
}; 

export default Contact;