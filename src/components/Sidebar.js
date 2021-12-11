import React from 'react'
import { Navigation } from './Navigation'
import { SidebarStyles } from './styles/SidebarElements'

export const Sidebar = ({navToggle}) => {
    return (
        <SidebarStyles className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation />
        </SidebarStyles>
    )
}
