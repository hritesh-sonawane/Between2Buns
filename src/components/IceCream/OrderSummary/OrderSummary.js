import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const flavorSummary = Object.keys(props.flavors)
    .map(flvKey => {
      return (
        <li key={flvKey}>
        <span style={{textTransform: 'capitalize'}}>{flvKey}</span>: {props.flavors[flvKey]}
        </li>
      );
    })
  return (
    <Aux>
      <h3>Your order</h3>
      <p>Your Ice cream with the following flavors:</p>
      <ul>
        {flavorSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </Aux>
  )
};

export default orderSummary;
