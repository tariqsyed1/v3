import React from 'react';

// Assets
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import Logo from '../../../Assets/logo.svg';
import tariq from '../../../Assets/Image/tariq.png'

const location = 'Toronto, Canada';
const email = 'tariqsyed.dev@gmail.com';
const linkedin = '';
const github = '';
const resume = '';

const Contact = () => {
    return (
        <div className="Contact">
            <img src={tariq} alt='' style={{'width': '20%'}}/>
            <div className='header'>yoitsbtandz</div>
            <div className='body'>software enginee test</div>
            <p id="Subheading">📍 Toronto, Canada | ✉️ <a href="mailto:hello@tariqsyed.dev">hello@tariqsyed.dev</a></p>
            <div id="Icons">
                <a href="https://www.github.com/tariqsyed1/" target="_blank" rel="noreferrer" className="social"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/tariqs1" target="_blank" rel="noreferrer" className="social"><LinkedInIcon /></a>
                <a href="https://drive.google.com/file/d/1FEpV0M9gKq3ngc0khsWNYkaohejwVCQZ/view?usp=sharing" target="_blank" rel="noreferrer" className="social"><DescriptionIcon /></a>
            </div>

        </div>
    );
}; 

export default Contact;