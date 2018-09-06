import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// Containers
import Layout from './hoc/layout/Layout';
import Reproducer from './containers/reproducer/Reproducer';
import Home from './containers/home/Home'
// Firebase
// import firebase from 'firebase';
import FireApp from './firebase-config/config';
// Redux
import { connect } from 'react-redux';
import * as actions from './store/actions/index';


class App extends Component {

  componentDidMount() {
    const currentURL = this.props.location.pathname.split('/')[2];
    if (currentURL) {
      this.database = FireApp.database().ref().child(currentURL);
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
    onSetPlayList: (playlist) => dispatch(actions.setPlayList(playlist)),
    onSetCurrentVideoURL: (videoURL) => dispatch(actions.setCurrentVideo(videoURL)),
    onCreatePlaylist: (playListName) => dispatch(actions.createPlayList(playListName))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
