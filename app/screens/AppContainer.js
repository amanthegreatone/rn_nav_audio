/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { NavigationActions } from 'react-navigation';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userProfileActions from '../actions/userProfile';
import { ActionCreators } from '../actions';

import { MyDrawerNavigator } from './Drawer/routes';

import AuthenticationContainer from './Authentication/AuthenticationContainer';

class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    console.log('AppContainer componentDidMount');
    this.loadUserProfile();
    this.loadUserLogin();
  }

  //load userProfile from realm
  loadUserProfile(){
    //load userProfile from realm into store
    const userProfile = {
      id: 1,
      mobile: '9910670242'
    };
    this.props.setUserProfile(userProfile);
  }//end of loadUserProfile

  loadUserLogin(){
    //load userLogin from realm into store
    const userLogin = {
      access_token: 'token',
      tenant: 'tenant'
    };
    this.props.setUserLogin(userLogin);
  }//end of loadUserLogin

  componentDidUpdate() {
    this.checkLogin();
  }

  checkLogin() {
    if (this.props.userProfile && this.props.userLogin.access_token) {
      return this.props.setLoggedIn(true);
    } else {
      this.props.setLoggedIn(false);
    }
  }

  render() {
    console.log(this.props);
    return this.props.loggedIn ? <MyDrawerNavigator /> : <AuthenticationContainer />;
  }

}

function mapStateToProps(state) {
  return {
    userProfile: state.appData.userProfile,
    userLogin: state.appData.userLogin,
    loggedIn: state.appData.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
