import React from 'react'
import { AboutPrimaryButtonStyles } from './styles/AboutElements'

export const AboutPrimaryButton = ({title}) => {
    return (
        <AboutPrimaryButtonStyles>
            {title}
        </AboutPrimaryButtonStyles>
    )
}
