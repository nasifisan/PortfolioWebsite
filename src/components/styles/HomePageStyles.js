import styled from "styled-components";


export const HomePageStyles = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    
    .particleToShow{
        top: 0;
        left: 0;
        position: absolute;
    }

    .about-me{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                
/* 
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                } */

                &:not(:last-child)
                {
                    margin-right: 1rem;
                }

                svg{
                    margin: .6rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-linkedin{
                &:hover{
                    border: 2px solid #0E76A8;
                    color: #0E76A8;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #040204;
                    color: #040204;
                }
            }
        }
    }
`