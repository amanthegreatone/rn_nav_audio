import React from 'react';
import { Text } from 'react-native';

import { TabNavigator, TabBarTop } from 'react-navigation';

import LeadContainer from './LeadContainer';
import FollowupContainer from './FollowupContainer';
import CommentsContainer from '../CommentsContainer';
import AttachmentsContainer from '../AttachmentsContainer';

import { baseNavigationOptions } from '../navigationOptions';

const leadDetailsNavigationOptions = {
  headerTitle: 'Lead Details',
  drawerIcon: ({ tintColor }) => <Text style={{ color: tintColor }}>IC</Text>,
  ...baseNavigationOptions
};

const leadDetailsStackRoutes = {
  Lead: {
    screen: LeadContainer,
    navigationOptions: leadDetailsNavigationOptions,
  },
  Followup: {
    screen: FollowupContainer,
    navigationOptions: leadDetailsNavigationOptions,
  },
  Comments: {
    screen: CommentsContainer,
    navigationOptions: leadDetailsNavigationOptions,
  },
  Attachments: {
    screen: AttachmentsContainer,
    navigationOptions: leadDetailsNavigationOptions,
  },
};

const leadDetailsStackOptions = {
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  swipeEnabled: true,
  backBehavior: 'none',
  tabBarOptions: {
    scrollEnabled: true,
    upperCaseLabel: false,
    activeTintColor: 'white',
    inactiveTintColor: 'grey',
    indicatorStyle: {
      backgroundColor: 'white',
      height: 4,
    },
    labelStyle: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 15,
      marginVertical: 4,
    },
    style: {
      backgroundColor: '#0c55ac',
    },
  },
};

export const LeadDetailsTabNavigator = TabNavigator(leadDetailsStackRoutes, leadDetailsStackOptions);
