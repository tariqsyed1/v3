import React from 'react';
import './About.css';

const bold = 'Currently, I\'m building the future of display advertising at Amazon.';

const About = () => {
    return (
        <div className="About">
            <div className='header'>Hey there, I'm Tariq 👋</div>
            <div className='section'>I'm a software engineer who loves to make cool stuff, currently working at <div className='bold-text'>Amazon</div> in <div className='bold-text'>Toronto</div>.</div>
            <div className='section'>My tech journey began when my computer couldn’t handle the games I wanted to play, so my dad (who's in IT) showed me how to build and troubleshoot PCs. Fast forward to today, and I'm enamoured with tech. Programming is modern day wizardry; developers can create value for people out of thin air.</div>
            <div className='section'>These days you can find me working on <a link='https://www.google.ca'>Sponsored Display</a>, building features to help advertisers maximize their advertising campaigns. I've had the privilege of working at a few different companies - If you’re curious, you can learn more about it <a>here.</a></div>
            <div className='section'>When I’m not at my computer, I’m probably chilling with my cat or listening to music. If you'd like to chat, feel free to contact me via email or LinkedIn :)</div>
        </div>
    );
}; 

export default About;
