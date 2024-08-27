import React from 'react';
import './Info.css';

import Contact from './Contact/Contact';
import About from './About/About';

const Info = () => {
    return (
        <div className="info">
            <div className='info-left'>
                <Contact />
            </div>
            <div className='info-right'>
                <About />
            </div>  
        </div>
    );
}; 

export default Info;