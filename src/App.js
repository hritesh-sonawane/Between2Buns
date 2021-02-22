import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';   // hoc
import IceCreamBuilder from './containers/IceCreamBuilder/IceCreamBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';

// The structure/architecture of the application
// Routing is done in App.js?
// Layout is an HOC
// Checkout | Orders | IceCreamBuilder -> are containers
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={IceCreamBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
