import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

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
          <li><a href="/">Price</a></li>
          <li><a href="/">About us</a></li>
          <li><a href="/">Q&A</a></li>
          <li><a href="/">Contact form</a></li>
          <li><a href="/login">Admin</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
