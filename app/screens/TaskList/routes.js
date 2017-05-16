import React from 'react';
import { Text, Button } from 'react-native';

import { TabNavigator, TabBarTop } from 'react-navigation';

import OpenTasksContainer from './OpenTasksContainer';
import ClosedTasksContainer from './ClosedTasksContainer';
import CompletedTasksContainer from './CompletedTasksContainer';
import CancelledTasksContainer from './CancelledTasksContainer';

import { baseNavigationOptions } from '../navigationOptions';

const taskListNavigationOptions = ({ navigation }) => ({
  headerTitle: 'Tasks',
  headerLeft: <Button transparent color="white" onPress={() => navigation.navigate('DrawerOpen')} title="Menu" />,
  drawerLabel: 'Tasks',
  drawerIcon: ({ tintColor }) => <Text style={{ color: tintColor }}>IC</Text>,
  ...baseNavigationOptions,
});

const taskListStackRoutes = {
  OpenTasks: {
    screen: OpenTasksContainer,
    navigationOptions: taskListNavigationOptions,
  },
  CompletedTasks: {
    screen: CompletedTasksContainer,
    navigationOptions: taskListNavigationOptions,
  },
  CancelledTasks: {
    screen: CancelledTasksContainer,
    navigationOptions: taskListNavigationOptions,
  },
  ClosedTasks: {
    screen: ClosedTasksContainer,
    navigationOptions: taskListNavigationOptions,
  },
};

const taskListStackOptions = {
  initialRouteName: 'OpenTasks',
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

export const TaskListTabNavigator = TabNavigator(taskListStackRoutes, taskListStackOptions);
