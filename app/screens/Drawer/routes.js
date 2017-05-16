import React from 'react';
// import { Text, Button } from 'react-native';

import { StackNavigator, DrawerNavigator } from 'react-navigation';


import Drawer from './Drawer';
import DashboardContainer from './DashboardContainer';
import UserProfileContainer from './UserProfileContainer';
import { TaskListTabNavigator } from '../TaskList/routes';
import { TaskDetailsTabNavigator } from '../TaskDetails/routes';
import { LeadListTabNavigator } from '../LeadList/routes';
import { LeadDetailsTabNavigator } from '../LeadDetails/routes';
import ImageViewContainer from '../ImageViewContainer';

import { baseNavigationOptions } from '../navigationOptions';

const DashboardNavigator = StackNavigator({
  Dashboard: {
    screen: DashboardContainer,
    navigationOptions: baseNavigationOptions,
  },
});

const TasksNavigator = StackNavigator({
  TaskList: { screen: TaskListTabNavigator },
  TaskDetails: { screen: TaskDetailsTabNavigator },
  ImageView: { screen: ImageViewContainer },
});

const LeadsNavigator = StackNavigator({
  LeadList: { screen: LeadListTabNavigator },
  LeadDetails: { screen: LeadDetailsTabNavigator },
  ImageView: { screen: ImageViewContainer },
});

const UserProfileNavigator = StackNavigator({
  UserProfile: {
    screen: UserProfileContainer,
    navigationOptions: baseNavigationOptions,
  },
});

const drawerStackRoutes = {
  Dashboard: { screen: DashboardNavigator },
  Tasks: { screen: TasksNavigator },
  Leads: { screen: LeadsNavigator },
  UserProfile: { screen: UserProfileNavigator },
};

const drawerStackOptions = {
  initialRouteName: 'Dashboard',
  drawerPosition: 'left',
  headerMode: 'screen',
  contentComponent: (props) => <Drawer {...props} />,
  contentOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    activeBackgroundColor: '#f54f53',
    inactiveBackgroundColor: 'transparent'
  }
};

export const MyDrawerNavigator = DrawerNavigator(drawerStackRoutes, drawerStackOptions);
