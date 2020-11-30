import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

import { Link } from "react-scroll";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><a href="/"><img src="https://i.imgur.com/Yp0bAtn.png" alt="" /></a></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li><Link to="price" smooth={true} duration={1000}>Price</Link></li>
          <li><Link to="about" smooth={true} duration={1000}>About us</Link></li>
          <li><Link to="qa" smooth={true} duration={1000}>Q&A</Link></li>
          <li><Link to="contactform" smooth={true} duration={1000}>Contact form</Link></li>
          <li><a href="/admin">Admin</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
