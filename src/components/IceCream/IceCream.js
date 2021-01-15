import React from 'react';
import classes from './IceCream.css';
import IceCreamFlavor from './IceCreamFlavor/IceCreamFlavor';

const iceCream = props => {
  let transformedFlavors = Object.keys(props.flavors)
      .map(flvKey => {
        return [...Array(props.flavors[flvKey])].map((_, i) => {
          return <IceCreamFlavor key={flvKey + i} type={flvKey} />
        });
      }).reduce((arr, el) => {   // we now get only 1 array
        return arr.concat(el)
      }, []);
  if (transformedFlavors.length === 0) {
    transformedFlavors = <p>Please start adding flavors!</p>
  }
  return (
    <div className={classes.IceCream}>
      <IceCreamFlavor type="chocochip" />
      {transformedFlavors}
      <IceCreamFlavor type="cup" />
    </div>
  );
}

export default iceCream;
