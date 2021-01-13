import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import IceCream from '../../components/IceCream/IceCream';

class IceCreamBuilder extends Component {
  render() {
    return (
      <Aux>
        <IceCream />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default IceCreamBuilder;