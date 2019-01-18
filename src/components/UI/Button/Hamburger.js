import React from 'react';
import classes from './Hamburger.module.css';

const hamburger = (props) => (
  <div className={classes.Hamburger} onClick={props.clicked}><i className="fas fa-bars"></i></div>
)

export default hamburger