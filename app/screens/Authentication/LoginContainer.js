/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { connect } from 'react-redux';
import * as userProfileActions from '../../actions/userProfile';

class LoginContainer extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  render() {
    console.log(this.props);
    const userLogin = {
      access_token: 'token',
      tenant: 'tenant'
    };
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent />
        <Text style={styles.welcome}>
          Login
        </Text>
        <Button onPress={() => this.props.dispatch(userProfileActions.setUserLogin(userLogin))} title="Login"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect()(LoginContainer);
