import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburger from '../../UI/Button/Hamburger'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.MobileOnly} >
      <Hamburger clicked={props.drawerToggleClicked}/>
    </div>
    <div className={classes.Logo}>
      <Logo />
    </div>  
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;

