import React from 'react'
import styled from 'styled-components'
import { AboutTitle } from './AboutTitle'
import { SmallTitle } from './SmallTitle'
import { InnerLayout} from './styles/Layout'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { ResumeItems } from './ResumeItems'


export const Resume = () => {

    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />

    return (
        <ResumeStyled>
            <AboutTitle title={'Resume'} span={'Resume'} />

            <InnerLayout className="resume-section">
                <div className="works">
                    <div className="small-title">
                        <SmallTitle 
                            icon={briefcase}
                            title={'Working Experience'}
                        />
                    </div>
                    <div className="resume-content">
                        <ResumeItems 
                            year={'2021 - Present'}
                            title={'Vice President'}
                            subtitle={'Feni Students Association, SUST'}
                            text={
                                'One of the regional organization in SUST for the students of Feni district.'
                            }
                        />
                        <ResumeItems 
                            year={'2017 - Present'}
                            title={'General Member'}
                            subtitle={'SUST CSE Society'}
                            text={
                                'An organization including teachers and students of the department of CSE, SUST.'
                            }
                        />
                        <ResumeItems 
                            year={'2017 - Present'}
                            title={'General Member'}
                            subtitle={'Kaizen SUST'}
                            text={
                                'Kaizen SUST is a research-based organization founded with the motto of "Continuous Development".'
                            }
                        />
                    </div>
                </div>
                <div className="education">
                    <div className="small-title">
                        <SmallTitle 
                            icon={school}
                            title={'Education'}
                        />
                    </div>
                    <div className="resume-content">
                        <ResumeItems 
                            year={'2017 - Present'}
                            title={'Computer Science & Engineering'}
                            subtitle={'Shahjalal University of Science & Technology'}
                            text={
                                'I am pursuing my Bsc certification here.'
                            }
                        />
                        <ResumeItems 
                            year={'2014 - 2016'}
                            title={'Science'}
                            subtitle={'Govt Science College'}
                            text={
                                'Attended science faculty for Higher Secondary Certificate(HSC).'
                            }
                        />
                    </div>
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }

    .education{
        padding-top: 4rem;
    }
`