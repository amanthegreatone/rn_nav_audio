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
  Button
} from 'react-native';

import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
// import { testAction } from '../actions/test';

class Splashscreen extends Component {

  static navigationOptions = {
    title: 'Splashscreen',
    header: null,
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Splashscreen
        </Text>
        {/* <Button onPress={() => this.props.dispatch(testAction({ test: 'testAction' }))} title="Next"/> */}
      </View>
    );
  }

}

function mapStateToProps(state) {
  return {
    userLogin: state.appData.userLogin,
    userProfile: state.appData.userProfile,
  };
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

export default connect(mapStateToProps)(Splashscreen);
