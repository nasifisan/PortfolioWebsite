import React from 'react'
import styled from 'styled-components'
import { AboutTitle } from './AboutTitle'
import { ProgressBar } from './ProgressBar'
import { InnerLayout} from './styles/Layout'

export const Skills = () => {
    return (
        <SkillStyled>
            <AboutTitle title={'My Skills'} span={'My Skills'} />

            <InnerLayout className={'resume-section'}>
                <div className="skills">
                    <ProgressBar
                        title={'HTML5'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'C/C++'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar
                        title={'Java'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'Python'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'C#'}
                        width={'30%'}
                        text={'30%'}
                    />
                </div>
            </InnerLayout>
        </SkillStyled>
    )
}


const SkillStyled = styled.div`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 2fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;

        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }

`