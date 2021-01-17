import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import IceCream from '../../components/IceCream/IceCream';
import BuildControls from '../../components/IceCream/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/IceCream/OrderSummary/OrderSummary';

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
    flavors: {
      grape: 0,
      unicorn: 0,
      blackcurrent: 0,
      strawberry: 0
    },
    totalPrice: 20,
    purchasable: false,
    purchasing: false
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
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    alert('You continue!');
  }

  render() {
    const disableInfo = {
      ...this.state.flavors
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
            flavors={this.state.flavors}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
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
  }
}

export default IceCreamBuilder;
