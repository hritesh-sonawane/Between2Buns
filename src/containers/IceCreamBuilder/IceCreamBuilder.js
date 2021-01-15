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
      grape: 1,
      unicorn: 1,
      blackcurrent: 1,
      strawberry: 1
    },
    totalPrice: 30
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

  }

  render() {
    return (
      <Aux>
        <IceCream flavors={this.state.flavors} />
        <BuildControls
          flavorAdded={this.addFlavorHandler}
        />
      </Aux>
    );
  }
}

export default IceCreamBuilder;
