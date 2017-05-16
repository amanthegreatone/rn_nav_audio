import React from 'react';
import { Text, Button } from 'react-native';

import { TabNavigator, TabBarTop } from 'react-navigation';

import OpenLeadsContainer from './OpenLeadsContainer';
import ClosedLeadsContainer from './ClosedLeadsContainer';
import PendingLeadsContainer from './PendingLeadsContainer';
import UpcomingLeadsContainer from './UpcomingLeadsContainer';

import { baseNavigationOptions } from '../navigationOptions';

const leadListNavigationOptions = ({ navigation }) => ({
  headerTitle: 'Leads',
  headerLeft: <Button transparent color="white" onPress={() => navigation.navigate('DrawerOpen')} title="Menu" />,
  drawerLabel: 'Leads',
  drawerIcon: ({ tintColor }) => <Text style={{ color: tintColor }}>IC</Text>,
  headerStyle: {
    backgroundColor: 'red',
  },
  ...baseNavigationOptions,
});

const leadListStackRoutes = {
  OpenLeads: {
    screen: OpenLeadsContainer,
    navigationOptions: leadListNavigationOptions,
  },
  PendingLeads: {
    screen: PendingLeadsContainer,
    navigationOptions: leadListNavigationOptions,
  },
  UpcomingLeads: {
    screen: UpcomingLeadsContainer,
    navigationOptions: leadListNavigationOptions,
  },
  ClosedLeads: {
    screen: ClosedLeadsContainer,
    navigationOptions: leadListNavigationOptions,
  },
};

const leadListStackOptions = {
  initialRouteName: 'OpenLeads',
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  swipeEnabled: true,
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

export const LeadListTabNavigator = TabNavigator(leadListStackRoutes, leadListStackOptions);
