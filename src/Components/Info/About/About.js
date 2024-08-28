import React from 'react';
import './About.css';

const sponsoredDisplayLink = 'https://advertising.amazon.com/en-ca/solutions/products/sponsored-display';
const cloudPicturesLink = 'https://drive.google.com/file/d/16Gy1de5m7Tx87JYseVrnkMqMvpEHyfX3/view?usp=sharing';
const linkToWork = '/work';
const musicLink = 'https://open.spotify.com/playlist/3Em4YtW5ajjSpIOIglKHtV?si=c0e7e0cc74904113&nd=1&dlsi=5a89561bfb4f470e';

const About = () => {
    return (
        <div className="About">
            <div className='header'>Hey there, I'm Tariq 👋</div>
            <div className='section'>I'm a software engineer who loves to make cool stuff, currently working at <div className='bold-text'>Amazon</div> in Toronto.</div>
            <div className='section'>My tech journey began when my computer couldn’t handle the games I wanted to play, so my dad (who's in IT) showed me how to build and troubleshoot PCs. Fast forward to today, and I'm enamoured with tech. Programming is modern day wizardry; developers can create value for people out of thin air.</div>
            <div className='section'>These days, you can find me working on <a href={sponsoredDisplayLink} target="_blank" rel="noreferrer">Sponsored Display</a>, building features to help advertisers maximize their advertising campaigns. I've had the privilege of working at a few different companies - If you’re curious, you can learn more about it <a href={linkToWork}>here.</a></div>
            <div className='section'>When I’m not at my computer, I’m probably chilling with my <a href={cloudPicturesLink} target="_blank" rel="noreferrer">cat</a> or listening to <a href={musicLink} target="_blank" rel="noreferrer">music</a>. If you'd like to chat, feel free to contact me via email or LinkedIn :)</div>
        </div>
    );
}; 

export default About;
