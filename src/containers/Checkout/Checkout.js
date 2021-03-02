import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    flavors: null,
    price: 0
  }

  // URLSearchParams API provide a way to get the data in the URL query parameters
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const flavors = {};
    let price = 0;
    for (let param of query.entries()) {
      // ['grape', '1']
      if (param[0] === 'price') {
        price = param[1];
      } else {
          flavors[param[0]] = +param[1];
      }
    }
    this.setState({flavors: flavors, totalPrice: price});
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
        <Route 
          path={this.props.match.path + '/contact-data'}
          render={(props) => (<ContactData 
              flavors={this.state.flavors}
              price={this.state.totalPrice}
              {...props}
            />)
          }
        />
      </div>
    );
  }
}

export default Checkout;
