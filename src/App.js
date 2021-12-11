import React from "react";
import {Switch as Switching, Route} from 'react-router'

import { MainContent } from "./components/MainContent";
import { Sidebar } from "./components/Sidebar";


import { AboutPage } from "./pages/AboutPage";
import { ResumePage } from "./pages/ResumePage";
import { ContactPage } from "./pages/ContactPage";
import { PortfoliosPage } from "./pages/PortfoliosPage";
import { BlogPage } from "./pages/BlogPage";
import { HomePage } from "./pages/HomePage";

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import {useState} from 'react';

function App() {

  const [navToggle, setNavToggle] = useState(false);

  return (
    <>
      <Sidebar navToggle={navToggle} />

      <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
            <MenuIcon />
          </IconButton>
      </div>

      <MainContent>

        <Switching>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolios" exact>
            <PortfoliosPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switching>

      </MainContent>
    </>
  );
}

export default App;