import React from 'react'
import { AboutImage } from '../components/AboutImage'
import { AboutService } from '../components/AboutService'
import { AboutTitle } from '../components/AboutTitle'
import { ReviewSection } from '../components/ReviewSection'
import {AboutStyles } from '../components/styles/AboutElements'
import { MainLayout } from '../components/styles/Layout'

export const AboutPage = () => {
    return (
        <MainLayout>
            <AboutStyles>
                <AboutTitle title={'About me'} span={'About me'} />
                <AboutImage />
                <AboutService />
                <ReviewSection />
            </AboutStyles>
        </MainLayout>
    )
}
