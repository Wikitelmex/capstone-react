import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import regionsReducer from './regions/regionsReducer';
import countriesReducer from './countries/countriesReducer';

const mixReducers = combineReducers({
  regions: regionsReducer,
  countries: countriesReducer,
});

const store = createStore(
  mixReducers,
  applyMiddleware(thunk),
);

export default store;
