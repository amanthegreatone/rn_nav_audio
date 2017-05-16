import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const userProfile = createReducer(null, {
  [types.SET_USER_PROFILE](state, action) {
    return action.userProfile;
  }
});

export const userLogin = createReducer(null, {
  [types.SET_USER_LOGIN](state, action) {
    return action.userLogin;
  }
});

export const loggedIn = createReducer(null, {
  [types.SET_LOGGED_IN](state, action) {
    return action.loggedIn;
  }
});
