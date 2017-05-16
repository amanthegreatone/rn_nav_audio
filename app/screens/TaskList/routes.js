import React from 'react';
import { Text, Button } from 'react-native';

import { TabNavigator, TabBarTop } from 'react-navigation';

import OpenTasks from './OpenTasks';
import ClosedTasks from './ClosedTasks';
import CompletedTasks from './CompletedTasks';
import CancelledTasks from './CancelledTasks';


const taskListNavigationOptions = ({ navigation }) => ({
  headerTitle: 'Tasks',
  headerLeft: <Button onPress={() => navigation.navigate('DrawerOpen')} title="Menu" />,
  drawerLabel: 'Tasks',
  drawerIcon: ({ tintColor }) => <Text style={{ color: tintColor }}>IC</Text>,
  headerStyle: {
    backgroundColor: 'red',
  },
});

const taskListStackRoutes = {
  OpenTasks: {
    screen: OpenTasks,
    navigationOptions: taskListNavigationOptions,
  },
  CompletedTasks: {
    screen: CompletedTasks,
    navigationOptions: taskListNavigationOptions,
  },
  CancelledTasks: {
    screen: CancelledTasks,
    navigationOptions: taskListNavigationOptions,
  },
  ClosedTasks: {
    screen: ClosedTasks,
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
      backgroundColor: 'blue',
    },
  },
};

export const TaskListTabNavigator = TabNavigator(taskListStackRoutes, taskListStackOptions);
