// import React from 'react';
// import { Text, Button } from 'react-native';
//
// import { StackNavigator, DrawerNavigator, TabNavigator, TabBarTop } from 'react-navigation';
//
// // import Splashscreen from './Splashscreen';
// // import VerifyMobile from './VerifyMobile';
// // import Login from './Login';
// // import Drawer from './Drawer';
// // import Dashboard from './Dashboard';
// // import MyTasks from './MyTasks';
// // import OpenTasks from './OpenTasks';
// // import ClosedTasks from './ClosedTasks';
// // import CompletedTasks from './CompletedTasks';
// // import CancelledTasks from './CancelledTasks';
// // import MyLeads from './MyLeads';
// // import UserProfile from './UserProfile';
// // import TaskDetails from './TaskDetails';
// // import LeadDetails from './LeadDetails';
//
// // const rootStackRoutes = {
// //   Splashscreen: { screen: Splashscreen },
// //   VerifyMobile: { screen: VerifyMobile },
// //   Login: { screen: Login },
// // };
// //
// // const rootStackOptions = {
// //   initialRouteName: 'Splashscreen',
// // };
//
//
//
// const DashboardNavigator = StackNavigator({
//   Dashboard: { screen: Dashboard },
// });
//
//
// const TasksNavigator = StackNavigator({
//   TaskList: { screen: TasksTabNavigator },
//   TaskDetails: { screen: TaskDetails }
// });
//
// const LeadsNavigator = StackNavigator({
//   LeadList: { screen: MyLeads },
//   LeadDetails: { screen: LeadDetails}
// });
//
// const UserProfileNavigator = StackNavigator({
//   UserProfile: { screen: UserProfile },
// });
//
// const drawerStackRoutes = {
//   Dashboard: {
//     screen: DashboardNavigator,
//     // name: 'Dashboard'
//   },
//   Tasks: {
//     screen: TasksNavigator,
//     // name: 'MyTasks'
//   },
//   Leads: {
//     screen: LeadsNavigator,
//     // name: 'MyLeads'
//   },
//   UserProfile: {
//     screen: UserProfileNavigator,
//     // name: 'UserProfile'
//   },
// };
//
// const drawerStackOptions = {
//   initialRouteName: 'Dashboard',
//   // drawerWidth: Dimensions.get('window').width - 50,
//   drawerPosition: 'left',
//   headerMode: 'screen',
//   contentComponent: (props)=> <Drawer {...props} />,
//   contentOptions: {
//     activeTintColor: 'white',
//     // inactiveTintColor: 'black',
//     activeBackgroundColor: 'purple',
//     inactiveBackgroundColor: 'transparent'
//   }
// };
//
// export const AuthenticationNavigator = StackNavigator(rootStackRoutes, rootStackOptions);
// // export const MyDrawerNavigator = DrawerNavigator(drawerStackRoutes, drawerStackOptions);
