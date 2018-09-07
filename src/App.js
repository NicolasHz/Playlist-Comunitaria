import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// Containers
import Layout from './hoc/layout/Layout';
// Firebase
import FireApp from './firebase-config/config';
// Redux
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
// Lazy loader
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncReproducer = asyncComponent(() => {
  return import('./containers/reproducer/Reproducer');
});
const asyncHome = asyncComponent(() => {
  return import('./containers/home/Home');
});

class App extends Component {

  componentDidMount() {
      this.database = FireApp.database().ref();
      this.database.on('value', snap => {
        console.log(Object.keys(snap.val()))
        // Fix dis
      });
    }

  render() {
    const redirect = (this.props.location.pathname === '/home'? null : <Redirect to="/home" />)
    return (
      <Layout>
        <Switch>
          <Route path="/playlist/:playListID" exact component={asyncReproducer} />
          <Route path="/home" exact component={asyncHome} />
          {redirect}
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreatePlaylist: (playListName) => dispatch(actions.createPlayList(playListName))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
