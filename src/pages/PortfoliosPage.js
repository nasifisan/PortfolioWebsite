import React, { useState } from 'react'
import styled from 'styled-components'
import { InnerLayout, MainLayout } from '../components/styles/Layout'
import { AboutTitle } from '../components/AboutTitle'
import { Menu } from '../components/Menu'
import portfolios from '../data/portfolios'
import { Button } from '../components/Button'


const allButtons = ['All', ...new Set(portfolios.map((item) => item.category))]

export const PortfoliosPage = () => {

    const [menuItem, setMenuItem] = useState(portfolios);
    const [button, setButton] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All')
        {
            setMenuItem(portfolios);
        }
        else{
            const filteredData = portfolios.filter((item) => item.category === button);
            setMenuItem(filteredData);
        }
    }

    return (
        <MainLayout>
            <PortfoliosStyled>
                <AboutTitle title={'portfolios'} span={'portfolios'} />
                <InnerLayout>

                    <Button filter={filter} button={button}/>
                    <Menu MenuItem={menuItem} />
                </InnerLayout>
            </PortfoliosStyled>
        </MainLayout>
    )
}

const PortfoliosStyled = styled.section`

`
