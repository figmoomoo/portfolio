import React from 'react';
import artHaven from '../../src/files/art haven screenshot.jpg';
import faceSec from '../../src/files/face sec screenshot.jpg';
import javascript from '../../src/files/skills/Javascript.png';
import react from '../../src/files/skills/react.png';
import node from '../../src/files/skills/Node.png';
import html from '../../src/files/skills/html.png';
import css from '../../src/files/skills/CSS.png';
import sass from '../../src/files/skills/sass.png';
import aws from '../../src/files/skills/aws.png';
import postgresql from '../../src/files/skills/postgres.png';
import redux from '../../src/files/skills/redux.png';
import express from '../../src/files/skills/express.png';
import photoshop from '../../src/files/skills/photoshop.png';

function Home(){
    return (
        <div className="home-component">
            <div className="home-main">
                <h1 className="home-name">Samuel Chin</h1>
                <h2 className="home-title">Full Stack Software Developer</h2>
                <img />
                <h2 className="home-skills">Javascript || React || Node || HTML/CSS || Sass || SQL || Photoshop </h2>
            </div>
            <div className="home-intro">
                <p className="home-intro-paragraph">Hi, I'm Samuel Chin! I'm a full-stack software developer, an amateur digital artist, a musician for fun, and a lover of technology. </p>
                <div className="home-skills-icons">
                    <div>
                        <img src={javascript} width={150}/>
                        <img src={react} width={150}/>
                        <img src={node} width={150}/>
                        <img src={html} width={150}/>
                    </div>
                    <div>
                        <img src={css} width={150}/>
                        <img src={sass} width={150}/>
                        <img src={aws} width={150}/>
                        <img src={postgresql} width={150}/>
                    </div>
                    <div>
                        <img src={redux} width={150}/>
                        <img src={express} width={150}/>
                        <img src={photoshop} width={150}/>
                    </div>
                </div>
            </div>
            <div className="home-projects">
                <h1>Projects</h1>
                <div className="home-artHaven">
                    <img src={artHaven} width={400}/>
                    <div>
                        <h2>Art Haven</h2>
                        <p>An art sharing social media app where you can post your art and check out other members' art</p>
                        <div>
                            <a href="https://www.arthaven.app/#/">LINK</a>
                            <p>|</p>
                            <a href="https://github.com/figmoomoo/personal-project-artshare">GITHUB</a>
                        </div>
                    </div>
                </div>
                <div className="home-faceSec">
                    <img src={faceSec} width={400}/>
                    <div>
                        <h2>Face Sec+</h2>
                        <p>A password and facial recognition app, utilizing Amazon's Image Rekognition API.</p>
                        <div>
                            <a href="https://face-id.dev/#/">LINK</a>
                            <p>|</p>
                            <a href="https://github.com/darrylking15/image-recognition">GITHUB</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a href="https://github.com/figmoomoo">GitHub</a>
                <a href="https://www.linkedin.com/in/samuel-chin-16028663/">LinkedIn</a>
                <a href="">Email</a>
            </div>
        </div>
    )
}

export default Home;