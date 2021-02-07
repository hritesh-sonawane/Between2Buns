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

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const flavors = {};
    for (let param of query.entries()) {
      // ['grape', '1']
      flavors[param[0]] = +param[1];
    }
    this.setState({flavors: flavors});
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary 
          flavors={this.state.flavors}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
      </div>
    );
  }
}

export default Checkout;
