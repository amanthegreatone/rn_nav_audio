// import React from 'react';
// import { Text, Button } from 'react-native';

import { TabNavigator, TabBarTop } from 'react-navigation';

import Task from './Task';
import TaskRevenue from './TaskRevenue';
import Comments from '../Comments';
import Attachments from '../Attachments';


// const taskDetailsNavigationOptions = ({ navigation }) => ({
//   headerTitle: 'Task Details',
//   // headerLeft: <Button onPress={() => navigation.navigate('DrawerOpen')} title="Menu" />,
//   // drawerLabel: 'Tasks',
//   // drawerIcon: ({ tintColor }) => <Text style={{ color: tintColor }}>IC</Text>,
//   // headerStyle: {
//   //   backgroundColor: 'red',
//   // },
// });

const taskDetailsNavigationOptions = {
  headerTitle: 'Task Details',
};

const taskDetailsStackRoutes = {
  Task: {
    screen: Task,
    navigationOptions: taskDetailsNavigationOptions,
  },
  TaskRevenue: {
    screen: TaskRevenue,
    navigationOptions: taskDetailsNavigationOptions,
  },
  Comments: {
    screen: Comments,
    navigationOptions: taskDetailsNavigationOptions,
  },
  Attachments: {
    screen: Attachments,
    navigationOptions: taskDetailsNavigationOptions,
  },
};

const taskDetailsStackOptions = {
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

export const TaskDetailsTabNavigator = TabNavigator(taskDetailsStackRoutes, taskDetailsStackOptions);
