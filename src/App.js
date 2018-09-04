import React, { Component } from 'react';
import Layout from './hoc/layout/Layout';
import Reproducer from './containers/reproducer/Reproducer';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// Firebase
import firebase from 'firebase';
import firebaseConfig from './firebase-config/config';
// Redux
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
// Utility
import { getUserIP } from './shared/utility';

class App extends Component {

  constructor() {
    super();
    getUserIP(ip => console.log(ip));
    this.app = firebase.initializeApp(firebaseConfig)
  }

  componentDidMount() {
    const currentURL = this.props.location.pathname.split('/')[2];
    if (currentURL) {
      this.database = this.app.database().ref().child(currentURL);
      this.database.on('value', snap => {
        if(snap.val()) {
          this.props.onSetPlayList(snap.val());
          this.props.onSetCurrentVideoURL(snap.val().currentVideoURL);
        } else {
          this.props.history.replace('/');
        }
      });
    }
  };

  render() {
    const redirect = (this.props.location.pathname === '/'? null : <Redirect to="/" />)
    return (
      <Layout>
        <Switch>
          <Route path="/playlist/:playListID" exact component={Reproducer} />
          {redirect}
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetPlayList: (playlist) => dispatch(actions.setPlayList(playlist)),
    onSetCurrentVideoURL: (videoURL) => dispatch(actions.setCurrentVideo(videoURL))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
