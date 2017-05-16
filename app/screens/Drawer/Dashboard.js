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
  Button,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import * as userProfileActions from '../../actions/userProfile';

class Dashboard extends Component {

  static navigationOptions = ({ navigation}) => ({
    headerTitle: 'Dashboard',
    headerLeft: <Button onPress={() => navigation.navigate('DrawerOpen')} title="Menu" />,
    drawerLabel: 'Dashboard',
    drawerIcon: ({tintColor}) => <Text style={{color: tintColor}}>IC</Text>
  });

  render() {
    console.log(this.props);
    const userLogin = null;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Dashboard
        </Text>
        <Button onPress={() => this.props.dispatch(userProfileActions.resetAccessToken())} title="Reset Login"/>
        <Button onPress={() => this.props.navigation.navigate('Tasks')} title="Tasks"/>
        {/* <Button onPress={() => this.props.navigation.navigate('Leads')} title="Leads"/> */}
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

export default connect()(Dashboard);
