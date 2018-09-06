import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// Containers
import Layout from './hoc/layout/Layout';
import Reproducer from './containers/reproducer/Reproducer';
import Home from './containers/home/Home'
// Firebase
import FireApp from './firebase-config/config';
// Redux
import { connect } from 'react-redux';
import * as actions from './store/actions/index';


class App extends Component {

  componentDidMount() {
      this.database = FireApp.database().ref();
      this.database.on('value', snap => {
        console.log(snap)
      });
    }

  render() {
    const redirect = (this.props.location.pathname === '/home'? null : <Redirect to="/home" />)
    return (
      <Layout>
        <Switch>
          <Route path="/playlist/:playListID" exact component={Reproducer} />
          <Route path="/home" exact component={Home} />
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
