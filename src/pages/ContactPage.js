import React from 'react'
import styled from 'styled-components'

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import { AboutPrimaryButton } from '../components/AboutPrimaryButton'
import { AboutTitle } from '../components/AboutTitle'
import { InnerLayout, MainLayout } from '../components/styles/Layout'
import { ContactItems } from '../components/ContactItems';


export const ContactPage = () => {

    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

    return (
        <MainLayout>
            <AboutTitle title={'Contact'} span={'Contact'} />
            <ContactStyled>
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        
                        <div className="contact-title">
                            <h4>Get in touch</h4>
                        </div>

                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name">
                                    Enter your name*
                                </label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">
                                    Enter your email*
                                </label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject">
                                    Enter your subject
                                </label>
                                <input type="subject" id="subject" />
                            </div>

                            <div className="form-field">
                                <label htmlFor="text-area">Write your message* </label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10">

                                </textarea>
                            </div>

                            <div className="form-field f-button">
                                <AboutPrimaryButton title={'Send'} />
                            </div>
                        </form>
                    </div>

                    <div className="right-content">
                        <ContactItems 
                            icon={phone}
                            title={'Phone'}
                            contact1={'(+880) 1640005311'}
                            contact2={'(+880) 1640005311'}                        
                        />
                        <ContactItems 
                            icon={email}
                            title={'Email'}
                            contact1={'nasif.nipom@gmail.com'}
                            contact2={'nasif.nipom@outlook.com'}                        
                        />
                        <ContactItems 
                            icon={location}
                            title={'Location'}
                            contact1={'Banasree, Dhaka'}
                            contact2={'Dhaka, Bangladesh'}                        
                        />
                    </div>
                </InnerLayout>
            </ContactStyled>
        </MainLayout>
    )
}


const ContactStyled = styled.section`

    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;

        @media screen and (max-width: 970px){
            grid-template-columns: repeat(1, 1fr);

            .f-button{
                margin-bottom: 2rem;
            }
        }

        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }

        .left-content{
            .form{
                width: 100%;
                @media screen and (max-width: 502px)
                {
                    width: 70%;
                }

                .form-field{
                    margin-top: 2rem;
                    position: relative;
                    width: 100%;

                    label{
                        position: absolute;
                        left: 20px;
                        top: -19px;
                        display: inline-block;
                        background-color: var(--background-dark-color);
                        padding:0 .5rem;
                        color: inherit;
                        
                    }

                    input{
                        border: 1px solid var(--border-color);
                        outline: none;
                        background: transparent;
                        height: 50px;
                        padding:0 15px;
                        width: 100%;
                        color: inherit;
                    }

                    textarea{
                        background-color: transparent;
                        color: inherit;
                        border: 1px solid var(--border-color);
                        outline: none;
                        width: 100%;
                        padding: .8rem 1rem;
                    }
                }
            }
        }

        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        
            @media screen and (max-width: 502px)
            {
                width: 70%;
            }
        }
    }

`