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

class UserProfileContainer extends Component {

  static navigationOptions = ({ navigation}) => ({
    headerTitle: 'Profile',
    headerLeft: <Button transparent color="white" onPress={() => navigation.navigate('DrawerOpen')} title="Menu" />,
    drawerLabel: 'Profile',
    drawerIcon: ({tintColor}) => <Text style={{color: tintColor}}>IC</Text>
  });

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent />
        <Text style={styles.welcome}>
          UserProfile
        </Text>
        {/* <Button onPress={() => this.props.dispatch(userProfileActions.setUserLogin(userLogin))} title="Login"/> */}
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

export default connect()(UserProfileContainer);
