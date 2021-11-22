import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import regionsReducer from './regions/regionsReducer';

const mixReducers = combineReducers({
  regions: regionsReducer,
});

const store = createStore(
  mixReducers,
  applyMiddleware(thunk, logger),
);

export default store;
