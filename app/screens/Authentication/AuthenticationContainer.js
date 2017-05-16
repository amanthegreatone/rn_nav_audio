/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { NavigationActions } from 'react-navigation';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as userProfileActions from '../actions/userProfile';
// import { ActionCreators } from '../actions';

import { AuthenticationNavigator } from './routes';

class AuthenticationContainer extends Component {

  componentDidMount() {
    console.log('AuthenticationContainer componentDidMount');
    this.checkAuthentication();
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  checkAuthentication() {
    const navigateTo = (routeName) => {
      const actionToDispatch = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })],
      });
      this.navigator.dispatch(actionToDispatch);
    };

    if (!this.props.userProfile) {
      navigateTo('VerifyMobile');
    } else if (!this.props.userLogin.access_token) {
      navigateTo('Login');
    }
  }

  render() {
    console.log(this.props);
    return <AuthenticationNavigator ref={(nav) => this.navigator = nav} />;
  }

}

function mapStateToProps(state) {
  return {
    userProfile: state.appData.userProfile,
    userLogin: state.appData.userLogin,
  };
}

export default connect(mapStateToProps)(AuthenticationContainer);
