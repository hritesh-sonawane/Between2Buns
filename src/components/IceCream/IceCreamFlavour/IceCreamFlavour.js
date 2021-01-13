import React from 'react';
import classes from './IceCreamFlavour.css';

const iceCreamFlavour = props => {
  let flavor = null;

  switch (props.type) {
    case ('bread-bottom'):
      flavor = <div className={classes.BreadBottom}></div>;
      break;

    case ('bread-top'):
      flavor = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;

    case ('meat'):
      flavor = <div className={classes.Meat}></div>;
      break;

    case ('cheese'):
      flavor = <div className={classes.Cheese}></div>;
      break;

    case ('bacon'):
      flavor = <div className={classes.Bacon}></div>;
      break;

    case ('salad'):
      flavor = <div className={classes.Salad}></div>;
      break;
    
    default:
      flavor = null;
  }

  return flavor;
}

export default iceCreamFlavour;