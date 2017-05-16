import { combineReducers } from 'redux';

import * as userProfile from './userProfile';

//combine all reducers from various files and export as a single object
export default combineReducers(Object.assign(
  userProfile,
));
