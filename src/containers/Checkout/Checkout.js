import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    flavors: {
      grape: 1,
      unicorn: 1,
      blackcurrent: 1,
      strawberry: 1
    } 
  }
  render() {
    return (
      <div>
        <CheckoutSummary flavors={this.state.flavors} />
      </div>
    );
  }
}

export default Checkout;
