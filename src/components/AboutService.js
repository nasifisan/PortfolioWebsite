import React from 'react'
import { AboutServiceCard } from './AboutServiceCard'
import { AboutTitle } from './AboutTitle'
import { AboutServiceStyles } from './styles/AboutElements'
import { InnerLayout } from './styles/Layout'
import design from '../images/design.svg'
import game_dev from '../images/game_dev.svg'
import intelligence from '../images/intelligence.svg'

export const AboutService = () => {
    return (
        <InnerLayout>
            <AboutServiceStyles>
                <AboutTitle title={'services'} span={'services'} />
                <div className="services">
                    <AboutServiceCard 
                        image={design}
                        title={'Web Design'}
                        paragraph={''}
                    
                    />
                    <div className="mid-card">
                        <AboutServiceCard 
                            image={game_dev}
                            title={'Game Development'}
                            paragraph={''}
                        
                        />
                    </div>
                    <AboutServiceCard 
                        image={intelligence}
                        title={'Artificial Intelligence'}
                        paragraph={''}
                    
                    />
                </div>
            </AboutServiceStyles>
        </InnerLayout>
    )
}
