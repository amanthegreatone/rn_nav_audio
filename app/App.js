/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import { Provider } from 'react-redux';

import store from './Store';

// import { RootStack } from './screens/routes';
import AppContainer from './screens/AppContainer';

export default class App extends Component {
  componentDidMount(){
    console.log('App componentDidMount');
  }

  componentWillUnMount(){
    console.log('App componentWillUnMount');
  }

  render() {
    console.log(this.props);
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
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
