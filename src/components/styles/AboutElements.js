import styled from 'styled-components';

export const AboutStyles = styled.section`
    
`
export const AboutTitleStyle = styled.div`
    position: relative;

    h2{
        font-size: 3.1rem;
        font-weight: 600;
        color: var(--white-color);
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;

        @media screen and (max-width: 498px){
                font-size: 2.6rem;
        }

        span{
            font-weight: 900;
            color: rgba(25, 29, 43, .44);
            font-size: 5rem;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;

            @media screen and (max-width: 711px){
                font-size: 3.8rem;
            }

            /* @media screen and (max-width: 561px){
                font-size: 3rem;
            } */

            @media screen and (max-width: 498px){
                font-size: 3rem;
            }
            
        }


        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 7.4rem;
            height: .33rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
        }

        &::after{
            width: 3.5rem;
            height: .33rem;
            background-color: var(--primary-color);
            content: "";
            position: absolute;
            bottom: 0;
            border-radius: 15px;
            left: 0;
        }
    }
`


export const AboutImageStyles = styled.div`
    margin-top: 5rem;
    display: flex;
    
    @media screen and (max-width: 1200px){
        flex-direction: column;

        .left-content{
            margin-bottom: 2rem;
        }
    }

    .left-content{
        width: 100%;

        img{
            width: 90%;
            object-fit: fill;
        }
    }

    .right-content{

        width: 100%;

        .about-info{
            display: flex;
            padding-bottom: 1.4rem;

            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }


            .infos, .info-title{
                p{
                    padding: .3rem 0;
                }
            }
        }
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;

            }
        }
        .typography{
            padding: 1rem 0;
        }
    }
`


export const AboutPrimaryButtonStyles = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;

    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .9;
    }

    &:hover::after{
        width: 100%;
        height: .2rem;
        background-color: var(--white-color);
    }
`

export const AboutServiceStyles = styled.div`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;

        @media screen and (max-width: 1200px){
            flex-direction: column;
        }

        @media screen and (max-width: 950px){
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 650px){
            grid-template-columns: repeat(1, 1fr);
        }
        
    }
    
`

export const AboutServiceCardStyles = styled.div `
    background-color: var(--background-dark-grey);
    
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .4s ease-in-out;

    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
    
    }

    .container{
        padding: 1.2rem;
        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem;
            position: relative;

            &::after{
                content: "";
                width: 4rem;
                background-color: var(--border-color);
                height: 4px;
                left: 0;
                position: absolute;
                bottom: 0;
                border-radius: 10px;
            }
            p{
                padding: .8rem 0;
            }
        }

    }
`