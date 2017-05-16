/* eslint-disable max-len, default-case, react/jsx-closing-bracket-location */

import * as types from './types';

export function setUserProfile(userProfile) {
  return {
    type: types.SET_USER_PROFILE,
    userProfile,
  };
}

export function setUserLogin(userLogin) {
  return {
    type: types.SET_USER_LOGIN,
    userLogin,
  };
}

export function setLoggedIn(loggedIn) {
  return {
    type: types.SET_LOGGED_IN,
    loggedIn,
  };
}

export function resetAccessToken() {
  return (dispatch, getState) => {
    const userLogin = { ...getState().appData.userLogin };
    userLogin.access_token = null;
    return dispatch(setUserLogin(userLogin));
  };
}

// export function setAccessToken(accessToken) {
//   return (dispatch, getState) => {
//     const userLogin = { ...getState().appData.userLogin };
//     userLogin.access_token = accessToken;
//     return dispatch(setUserLogin(userLogin));
//   };
// }
