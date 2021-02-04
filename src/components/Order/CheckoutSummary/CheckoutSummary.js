import React from 'react';
import IceCream from '../../IceCream/IceCream';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope you loved it!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <IceCream flavors={props.flavors} />
      </div>
      <Button 
        btnType="Danger"
        clicked
        >Cancel</Button>
      <Button 
        btnType="Success"
        clicked
        >Continue</Button>
    </div>
  )
}

export default checkoutSummary;