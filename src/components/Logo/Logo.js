import React from 'react';
import iceCreamLogo from '../../assets/images/icecreamlogo.jpg';
import classes from './Logo.css';

const logo = () => (
  <div className={classes.Logo}>
    <img src={iceCreamLogo} alt="ice-cream" />
  </div>
);

export default logo;