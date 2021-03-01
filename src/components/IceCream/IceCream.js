import React from 'react';
import classes from './IceCream.css';
import IceCreamFlavor from './IceCreamFlavor/IceCreamFlavor';

const iceCream = props => {
  console.log(props);

  // Object.keys() method returns an array of a given object's own enumerable property names,
  // iterated in the same order that a normal loop would
  let transformedFlavors = Object.keys(props.flavors)
      .map(flvKey => {
        return [...Array(props.flavors[flvKey])].map((_, i) => {
          return <IceCreamFlavor key={flvKey + i} type={flvKey} />
        });
        // reduce() method reduces the array to a single value
        // reduce() method executes a provided function for each value of the array (from left-to-right)
      }).reduce((arr, el) => {
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
