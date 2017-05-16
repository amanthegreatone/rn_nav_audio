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

import { connect } from 'react-redux';
// import * as userProfileActions from '../actions/userProfile';

class Task extends Component {

  static navigationOptions = {
    tabBarLabel: 'Task',
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Task
        </Text>
        {/* <Button onPress={() => this.props.navigation.navigate('TaskDetails')} title="Task Details"/> */}
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

export default connect()(Task);
