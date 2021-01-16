import React from 'react';
import Aux from '../../../hoc/Auxiliary';

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
    </Aux>
  )
};

export default orderSummary;
