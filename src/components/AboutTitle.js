import React from 'react'
import { AboutTitleStyle } from './styles/AboutElements'

export const AboutTitle = ({title, span}) => {
    return (
        <AboutTitleStyle>
            <h2>{title} <b><span>{span}</span></b></h2>
        </AboutTitleStyle>
    )
}