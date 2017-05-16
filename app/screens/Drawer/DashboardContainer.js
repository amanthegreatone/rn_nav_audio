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
  Button,
  TouchableOpacity,
  Platform
} from 'react-native';

import { connect } from 'react-redux';
import * as userProfileActions from '../../actions/userProfile';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

class DashboardContainer extends Component {

  static navigationOptions = ({ navigation}) => ({
    headerTitle: 'Dashboard',
    headerLeft: <Button transparent color="white" onPress={() => navigation.navigate('DrawerOpen')} title="Menu" />,
    drawerLabel: 'Dashboard',
    drawerIcon: ({tintColor}) => <Text style={{color: tintColor}}>IC</Text>,
    headerStyle: {
      borderTopWidth: 24,
    }
  });

  render() {
    console.log(this.props);
    const userLogin = null;
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor="#303F9FD5" barStyle="light-content" translucent />
        {/* <StatusBar barStyle="light-content" translucent={true} backgroundColor='#303F9F' /> */}
        {/* { Platform.OS === 'android' && Platform.Version >= 20 ?
          <View
            style={{
              height: 24,
              backgroundColor: "#512DA8",
            }}
          />
          : null } */}
        <Text style={styles.welcome}>
          Dashboard
        </Text>
        <Button onPress={() => this.props.dispatch(userProfileActions.resetAccessToken())} title="Reset Login"/>
        <Button onPress={() => this.props.dispatch(userProfileActions.setUserProfile(null))} title="Reset Profile"/>
        <Button onPress={() => this.props.navigation.navigate('Tasks')} title="Tasks"/>
        <Button onPress={() => this.props.navigation.navigate('Leads')} title="Leads"/>
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
  statusBar: {
    height: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default connect()(DashboardContainer);
