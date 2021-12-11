import styled from "styled-components";


export const SidebarStyles = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;

    @media screen and (max-width:1200px){
        transform:  translateX(-100%);
        z-index: 20;
    }
`;

export const NavigationStyles = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);

    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 2rem 0rem;
        img{
            width: 60%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;


        li{
            display: block;

            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: lowercase;
                font-weight: 600;
                letter-spacing: 1px;


                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }

                /* &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 0;
                    background-color: var(--primary-color);
                    transition: All .4s cubic-bezier(1, -0.2, .25, .95);
                    z-index: -1;
                    opacity: 0.21;
                } */
            }

            /* a:hover::before{
                width: 100%;
                height: 100%;
            } */

            .active-class{
                color: red;
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 2rem 0;
            font-size: .8rem;
            display: block;
            text-align: center;
        }
    }
`;