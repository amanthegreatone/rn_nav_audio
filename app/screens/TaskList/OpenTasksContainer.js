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

import { connectAlert } from '../../components';

// @connectAlert
class OpenTasksContainer extends Component {

  static navigationOptions = {
    tabBarLabel: 'Open',
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        {/* <StatusBar barStyle="light-content" translucent /> */}
        <Text style={styles.welcome}>
          Open Tasks
        </Text>
        <Button onPress={() => this.props.navigation.navigate('TaskDetails')} title="Task Details"/>
        <Button onPress={() => this.props.alertWithType('warn', 'Hey!', 'Alerting peopleis useful.')} title="alert" />
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

export default connect()(connectAlert(OpenTasksContainer));
