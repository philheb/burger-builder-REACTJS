import React from 'react';
import Logo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={Logo} alt="MyBurger Logo" />
  </div>
);

export default logo;