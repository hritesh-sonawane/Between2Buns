import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import IceCream from '../../components/IceCream/IceCream';

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
    }
  }
  render() {
    return (
      <Aux>
        <IceCream flavors={this.state.flavors} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default IceCreamBuilder;
