import React from 'react';
import classes from './IceCream.css';
import IceCreamFlavor from './IceCreamFlavor/IceCreamFlavor';

const iceCream = props => {
  return (
    <div className={classes.IceCream}>
      <IceCreamFlavor type="choco-chip" />
      <IceCreamFlavor type="grape" />
      <IceCreamFlavor type="unicorn" />
      <IceCreamFlavor type="black-current" />
      <IceCreamFlavor type="strawberry" />
      <IceCreamFlavor type="cup" />
    </div>
  );
}

export default iceCream;