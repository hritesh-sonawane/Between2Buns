import React from 'react';
import classes from './Order.css';

const order = props => {
  const flavors = [];

  for (let flavorName in props.flavors) {
    flavors.push({
      name: flavorName,
      amount: props.flavors[flavorName]
    });
  }

  const flavorOutput = flavors.map(flv => {
    return  <span className={classes.FlavorBox}
              key={flv.name}>{flv.name} ({flv.amount})
            </span>;
  })

  return (
    <div className={classes.Order}>
      <p>Flavors: {flavorOutput}</p>
      <p>Price: <strong>₹{Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  );
}

export default order;