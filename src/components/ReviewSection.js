import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from './styles/Layout'
import { AboutTitle } from './AboutTitle'
import { ReviewItem } from './ReviewItem'

export const ReviewSection = () => {
    return (

        <ReviewStyled>
            <AboutTitle title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem text={'hello'} />
                    <ReviewItem text={'hi'} />
                    <ReviewItem text={'There'} />
                    <ReviewItem text={'oh no'} />
                </div>
            </InnerLayout>
        
        </ReviewStyled>
    )
}

const ReviewStyled = styled.section `   

    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        width: 100%;
        

        @media screen and (max-width: 1200px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`