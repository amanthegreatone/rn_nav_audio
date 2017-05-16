import React from 'react';
// import { Text, Button } from 'react-native';

import { StackNavigator, DrawerNavigator } from 'react-navigation';


import Drawer from './Drawer';
import Dashboard from './Dashboard';
import UserProfile from './UserProfile';
import { TaskListTabNavigator } from '../TaskList/routes';
import { TaskDetailsTabNavigator } from '../TaskDetails/routes';
import ImageView from '../ImageView';

const DashboardNavigator = StackNavigator({
  Dashboard: { screen: Dashboard },
});

const TasksNavigator = StackNavigator({
  TaskList: { screen: TaskListTabNavigator },
  TaskDetails: { screen: TaskDetailsTabNavigator },
  ImageView: { screen: ImageView },
});

// const LeadsNavigator = StackNavigator({
//   LeadList: { screen: MyLeads },
//   LeadDetails: { screen: LeadDetails}
// });

const UserProfileNavigator = StackNavigator({
  UserProfile: { screen: UserProfile },
});

const drawerStackRoutes = {
  Dashboard: {
    screen: DashboardNavigator,
    // name: 'Dashboard'
  },
  Tasks: {
    screen: TasksNavigator,
    // name: 'MyTasks'
  },
  // Leads: {
  //   screen: LeadsNavigator,
  //   // name: 'MyLeads'
  // },
  UserProfile: {
    screen: UserProfileNavigator,
    // name: 'UserProfile'
  },
};

const drawerStackOptions = {
  initialRouteName: 'Dashboard',
  drawerPosition: 'left',
  headerMode: 'screen',
  contentComponent: (props) => <Drawer {...props} />,
  contentOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'grey',
    activeBackgroundColor: 'purple',
    inactiveBackgroundColor: 'transparent'
  }
};

export const MyDrawerNavigator = DrawerNavigator(drawerStackRoutes, drawerStackOptions);
