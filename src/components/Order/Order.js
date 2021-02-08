import React from 'react';
import classes from './Order.css';

const order = props => (
  <div className={classes.Order}>
    <p>Flavors: Unicorn (1)</p>
    <p>Price: <strong>RUP 120</strong></p>
  </div>
);

export default order;