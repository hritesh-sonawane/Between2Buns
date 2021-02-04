import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import IceCreamBuilder from './containers/IceCreamBuilder/IceCreamBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout>
         <IceCreamBuilder />
         <Checkout />
       </Layout>
      </div>
    );
  }
}

export default App;
