import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import IceCream from '../../components/IceCream/IceCream';
import BuildControls from '../../components/IceCream/BuildControls/BuildControls';

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
    totalPrice: 20
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
    })
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
    })
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
        <IceCream flavors={this.state.flavors} />
        <BuildControls
          flavorAdded={this.addFlavorHandler}
          flavorRemoved={this.removeFlavorHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default IceCreamBuilder;
