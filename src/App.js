import React, { Component } from 'react';
import Layout from './hoc/layout/Layout';
import Home from './containers/home/Home';

class App extends Component {
  render() {
    return (
      <Layout>
        <Home/>
      </Layout>
    );
  }
}

export default App;