// import { createNavigationEnabledStore, NavigationReducer } from '@expo/ex-navigation';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';


// middleware that logs actions only in DEV mode
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

//configure redux store
function configureStore(initialState) {
  //this is to compose extra middleware functions in redux
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );

  return createStore(
    combineReducers({
      // navigation: NavigationReducer,
      // other reducers
      appData: reducer
    }),
    initialState,
    enhancer
  );
}//end of configureStore

const initialState = {};
//run the configureStore function and create store by passing a blank initial state
const store = configureStore(initialState);

export default store;
