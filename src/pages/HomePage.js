import React from 'react'
import { Particle } from '../components/styles/AParticle'
import { HomePageStyles } from '../components/styles/HomePageStyles'
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const HomePage = () => {
    return (
        <>
            <HomePageStyles>
                <div className="particleToShow">
                    <Particle />
                </div>
                <div className="about-me">
                    <h1>Hi, I'm <span>Nasif Mahmud Nipom</span></h1>
                    <p>
                        A tech enthusiast || Competitive Programmer
                    </p>
                    <div className="icons">
                        <a href='https://www.linkedin.com/in/nasifisan/' className="icon i-linkedin"><LinkedInIcon /></a>
                        <a href='https://github.com/nasifisan' onclick={(href) => window.open(this.href)} className="icon i-github"><GitHubIcon /></a>
                        <a href='#!' className="icon i-youtube"><YouTubeIcon /></a>
                    </div>
                </div>
            </HomePageStyles>
        </>
    )
}
