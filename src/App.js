import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import IceCreamBuilder from './containers/IceCreamBuilder/IceCreamBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={IceCreamBuilder} />
            </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
