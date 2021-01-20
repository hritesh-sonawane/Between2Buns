import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import IceCreamBuilder from './containers/IceCreamBuilder/IceCreamBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout>
         <IceCreamBuilder />
       </Layout>
      </div>
    );
  }
}

export default App;
