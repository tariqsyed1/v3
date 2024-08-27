import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="About">
            <div className='header'>Hey there, I'm Tariq!</div>
            <div className='body'>I'm a software engineer who loves to make cool stuff. I'm currently working on building the future of display advertising at Amazon.</div>
            <div className='body'>My story with tech started when I learned my computer wasn’t powerful enough to run video games. When I brought this fact to my Dad (who’s in IT), he taught me about computer hardware, how to build a PC, how to troubleshoot, what software even is… from this point on I was hooked. I began watching the latest consumer tech releases, learning how to build my own apps, and the rest is history.</div>
            <div className='body'>These days, you can find me at Amazon building features to help advertisers maximize their advertising campaigns. I work closely with applied scientists, leveraging their recommendation models to surface this data in a few places. If you’re curious, you can learn more about it here.</div>
            <div className='body'>When I’m not working, I’m probably chilling with my cat, listening to music, or going on a nice drive. I’m a big believer in collaboration and creativity - when everyone is on the same page and pushing towards a common goal, that’s when the best work happens. </div>
        </div>
    );
}; 

export default About;
