import React from 'react'
import styled from 'styled-components'

import Brightness4Icon from '@mui/icons-material/Brightness4';

import Switch from '@mui/material/Switch';
import { useState, useEffect } from 'react';

export const MainContent = ({children}) => {
    
    const [theme, setTheme] = useState('dark-theme');
    const [checked, setChecked] = useState();


    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme])

    const themeToggler = () =>{
        if(theme === 'light-theme')
        {
            setTheme('dark-theme');
            setChecked(false);
        }
        else{
            setTheme('light-theme');
            setChecked(true);
        }
    }

    return (
        <MainContentStyles>

            <div className="lines">
                <div className="line-1"></div>
                <div className="line-1"></div>
                <div className="line-1"></div>
                <div className="line-1"></div>
            </div>

            <div className="theme">
                <div className="light-dark-mode">
                    <div className="left-content"><Brightness4Icon /></div>
                    <div className="right-content">
                        <Switch
                            value=""
                            inputProps={{'aria-label': ''}}
                            size="medium"
                            checked={checked}
                            onClick={themeToggler}
                        />
                    </div>
                </div>
            </div>

            {children}

        </MainContentStyles>
    )
}

export const MainContentStyles = styled.main`

    position: relative;
    margin-left: 16.3rem;
    min-height: 100vh;

    @media screen and (max-width:1200px){
        margin-left: 0;
    }

    .lines{
        position: absolute;
        min-height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        opacity: 0.4;
        z-index: -1;

        .line-1, .line-2, .line-3, .line-4{
            width: 1px;
            min-height: 100vh;
            background-color: var(--border-color);
        }
    }
`
