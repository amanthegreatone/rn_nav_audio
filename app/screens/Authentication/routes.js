// import React from 'react';
// import { Text, Button } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Splashscreen from './Splashscreen';
import VerifyMobileContainer from './VerifyMobileContainer';
import LoginContainer from './LoginContainer';

import { baseNavigationOptions } from '../navigationOptions';

const authStackRoutes = {
  Splashscreen: { screen: Splashscreen },
  VerifyMobile: {
    screen: VerifyMobileContainer,
    navigationOptions: baseNavigationOptions,
  },
  Login: {
    screen: LoginContainer,
    navigationOptions: baseNavigationOptions,
  },
};

const authStackOptions = {
  initialRouteName: 'Splashscreen',
};

export const AuthenticationNavigator = StackNavigator(authStackRoutes, authStackOptions);
