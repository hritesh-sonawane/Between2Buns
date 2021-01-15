import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import IceCream from '../../components/IceCream/IceCream';
import BuildControls from '../../components/IceCream/BuildControls/BuildControls';

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
    }
  }
  render() {
    return (
      <Aux>
        <IceCream flavors={this.state.flavors} />
        <BuildControls />
      </Aux>
    );
  }
}

export default IceCreamBuilder;
