import React from 'react'
import styled from 'styled-components'
import { Resume } from '../components/Resume'
import { Skills } from '../components/Skills'
import { MainLayout } from '../components/styles/Layout'

export const ResumePage = () => {
    return (
        <MainLayout>
            <ResumePageStyled>
                <Skills />
                <Resume />
            </ResumePageStyled>
        </MainLayout>
    )
}


const ResumePageStyled = styled.section`

`

