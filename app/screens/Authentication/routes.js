// import React from 'react';
// import { Text, Button } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Splashscreen from './Splashscreen';
import VerifyMobile from './VerifyMobile';
import Login from './Login';

const rootStackRoutes = {
  Splashscreen: { screen: Splashscreen },
  VerifyMobile: { screen: VerifyMobile },
  Login: { screen: Login },
};

const rootStackOptions = {
  initialRouteName: 'Splashscreen',
};

export const AuthenticationNavigator = StackNavigator(rootStackRoutes, rootStackOptions);
