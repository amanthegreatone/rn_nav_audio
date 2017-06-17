/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { Provider } from 'react-redux';

import store from './Store';

import AppContainer from './screens/AppContainer';

import { AlertProvider } from './components';

export default class App extends Component {
  componentDidMount() {
    console.log('App componentDidMount');
  }

  componentWillUnmount() {
    console.log('App componentWillUnmount');
  }

  render() {
    console.log(this.props);
    return (
      <Provider store={store}>
        <AlertProvider>
          <AppContainer />
        </AlertProvider>
      </Provider>
    );
  }
}
