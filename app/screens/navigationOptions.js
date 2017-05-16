import { Platform } from 'react-native';

export const baseNavigationOptions = {
  headerStyle: {
    backgroundColor: '#3F51B5', //'#0c55ac',
    marginTop: Platform.OS === 'ios' ? 0 : 24, // padding for translucent status bar in android
  },
  headerTitleStyle: {
    color: 'white'
  },
  headerTintColor: 'white',
}
