import React from 'react';
import { Text } from 'react-native';

import { TabNavigator, TabBarTop } from 'react-navigation';

import TaskContainer from './TaskContainer';
import TaskRevenueContainer from './TaskRevenueContainer';
import CommentsContainer from '../CommentsContainer';
import AttachmentsContainer from '../AttachmentsContainer';

import { baseNavigationOptions } from '../navigationOptions';

const taskDetailsNavigationOptions = {
  headerTitle: 'Task Details',
  drawerIcon: ({ tintColor }) => <Text style={{ color: tintColor }}>IC</Text>,
  ...baseNavigationOptions
};

const taskDetailsStackRoutes = {
  Task: {
    screen: TaskContainer,
    navigationOptions: taskDetailsNavigationOptions,
  },
  TaskRevenue: {
    screen: TaskRevenueContainer,
    navigationOptions: taskDetailsNavigationOptions,
  },
  Comments: {
    screen: CommentsContainer,
    navigationOptions: taskDetailsNavigationOptions,
  },
  Attachments: {
    screen: AttachmentsContainer,
    navigationOptions: taskDetailsNavigationOptions,
  },
};

const taskDetailsStackOptions = {
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

export const TaskDetailsTabNavigator = TabNavigator(taskDetailsStackRoutes, taskDetailsStackOptions);
