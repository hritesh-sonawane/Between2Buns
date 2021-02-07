import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import IceCream from '../../components/IceCream/IceCream';
import BuildControls from '../../components/IceCream/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/IceCream/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const FLAVOR_PRICES = {
  grape: 20,
  unicorn: 20,
  blackcurrent: 15,
  strawberry: 15
}

class IceCreamBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }

  state = {
    flavors: null,
    totalPrice: 20,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    console.log(this.props);
    axios.get('https://what-the-scoop-default-rtdb.firebaseio.com/flavors.json')
      .then(response => {
        this.setState({flavors: response.data});
      })
      .catch(error => {
        this.setState({error: true});
      });
  }

  updatePurchaseState(flavors) {
    const sum = Object.keys(flavors)
      .map(flvKey => {
        return flavors[flvKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addFlavorHandler = type => {
    const oldCount = this.state.flavors[type];
    const updatedCount = oldCount + 1;
    const updatedFlavors = {
        ...this.state.flavors
    }
    updatedFlavors[type] = updatedCount;
    const priceAddition = FLAVOR_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice= oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      flavors: updatedFlavors
    });
    this.updatePurchaseState(updatedFlavors);
  }

  removeFlavorHandler = type => {
    const oldCount = this.state.flavors[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedFlavors = {
        ...this.state.flavors
    }
    updatedFlavors[type] = updatedCount;
    const priceDeduction = FLAVOR_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice= oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      flavors: updatedFlavors
    });
    this.updatePurchaseState(updatedFlavors);
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false});
  }

  purchaseContinueHandler = () => {
    // // alert('You continue!');
    // this.setState({ loading: true });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'Sasuke',
    //     address: {
    //       street: '221B',
    //       zipCode: '111222',
    //       country: 'Hidden Leaf'
    //     },
    //     email: 'sasuke@test.com'
    //   },
    //   deliveryMethod: 'fastest'
    // }
    // axios.post('/orders.json', order)   // for firebase it's xyz.json
    //   .then(response => {
    //     this.setState({ loading: false, purchasing: false});
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false, purchasing: false});
    //   });
    const queryParams = [];
    for(let i in this.state.flavors) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.flavors[i]));
    }
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  render() {
    const disableInfo = {
      ...this.state.flavors
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }

    let orderSummary = null;
    let icecream = this.state.error ? <p>Flavors couldn't be loaded!</p> : <Spinner />

    if(this.state.flavors) {
      icecream  = (
        <Aux>
          <IceCream flavors={this.state.flavors} />
          <BuildControls
            flavorAdded={this.addFlavorHandler}
            flavorRemoved={this.removeFlavorHandler}
            disabled={disableInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = <OrderSummary 
        flavors={this.state.flavors}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.state.totalPrice}
      />
    }
    if(this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {icecream}
      </Aux>
    );
  }
}

export default withErrorHandler(IceCreamBuilder, axios);
