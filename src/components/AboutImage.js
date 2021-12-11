import React from 'react'
import { AboutImageStyles } from './styles/AboutElements'
import aboutprop from '../images/aboutprop.jpg'
import { AboutPrimaryButton } from './AboutPrimaryButton'

export const AboutImage = () => {
    return (
        <AboutImageStyles>

            <div className="left-content">
                <img src={aboutprop} alt=""/>
            </div>

            <div className="right-content">
 
                <h4>Hi, I'm <span>Nipom</span></h4>

                <p className="typography">A tech enthusiast</p>

                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Services</p>
                    </div>
                    <div className="infos">
                        <p>: Nasif Mahmud Nipom</p>
                        <p>: 23</p>
                        <p>: Bangladeshi</p>
                        <p>: English, Bengali</p>
                        <p>: Dhaka, Bangladesh</p>
                        <p>: Software Engineer</p>
                    </div>
                </div>

                <AboutPrimaryButton title={'Download cv'} />
            </div>
            
        </AboutImageStyles>
    )
}
