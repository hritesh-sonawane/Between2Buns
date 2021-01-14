import React from 'react';
import classes from './IceCream.css';
import IceCreamFlavor from './IceCreamFlavor/IceCreamFlavor';

const iceCream = props => {
  const transformedFlavors = Object.keys(props.flavors)
      .map(flvKey => {
        return [...Array(props.flavors[flvKey])].map((_, i) => {
          return <IceCreamFlavor key={flvKey + i} type={flvKey} />
        });
      });
  return (
    <div className={classes.IceCream}>
      <IceCreamFlavor type="chocochip" />
      {transformedFlavors}
      <IceCreamFlavor type="cup" />
    </div>
  );
}

export default iceCream;
