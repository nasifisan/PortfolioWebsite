import React from 'react'
import { NavigationStyles } from './styles/SidebarElements'
import perfectImposter from '../images/perfectImposter.png'
import {NavLink} from 'react-router-dom'


export const Navigation = () => {
    return (
        <NavigationStyles>

            <div className="avatar">
                <img src={perfectImposter} alt=""/>
            </div>

            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="active-class" exact>
                        Portfolios
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>
                        Resume
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class" exact>
                        Blogs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>
                        Contact
                    </NavLink>
                </li>
            </ul>

            <footer>
                <p>@2021 my Portfolio Website</p>
            </footer>

        </NavigationStyles>
    )
}
