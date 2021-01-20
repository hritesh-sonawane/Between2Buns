import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  componentDidUpdate() {
    console.log('[OrderSummary] DidUpdate');
  }

  render() {
    const flavorSummary = Object.keys(this.props.flavors)
    .map(flvKey => {
      return (
        <li key={flvKey}>
        <span style={{textTransform: 'capitalize'}}>{flvKey}</span>: {this.props.flavors[flvKey]}
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
      <strong><p>Total Price: ₹{this.props.price.toFixed(2)}</p></strong>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
    </Aux>
    );
  }
}

export default OrderSummary;
