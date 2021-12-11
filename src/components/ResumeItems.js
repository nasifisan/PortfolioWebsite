import React from 'react'
import styled from 'styled-components'

export const ResumeItems = ({title, year, text, subtitle}) => {
    return (
        <ResumeItemsStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subtitle}</h6>
                <p>{text}</p>
            </div>
            
        </ResumeItemsStyled>
    )
}

const ResumeItemsStyled = styled.div`

    display: flex;

    @media screen and (max-width: 421px)
    {
        p, h5, h6{
            font-size: 80%;
        }
    }

    &:not(:last-child){
        padding-bottom: 3rem;
    }
    
    .left-content{
        /* width: 20%; */
        flex-basis: 15%;
        padding-left: 20px;
        position: relative;
        
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
        }

        p{
            display: inline-block;
        }
    }

    .right-content{
        padding-left: 5rem;
        position: relative;
        flex-basis: 95%;
        

        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
        }

        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }

        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
        }
    }
`