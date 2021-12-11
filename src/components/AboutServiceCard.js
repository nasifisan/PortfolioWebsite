import React from 'react'
import { AboutServiceCardStyles } from './styles/AboutElements'

export const AboutServiceCard = ({image, title, paragraph}) => {
    return (
        <AboutServiceCardStyles>
            <div className="container">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
            
        </AboutServiceCardStyles>
    )
}
