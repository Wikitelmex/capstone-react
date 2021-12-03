import configureStore from 'redux-mock-store';

import {
  countriesFilter,
  fetchCountriesRequest,
  fetchCountriesSuccess,
  fetchCountriesFailure,
} from '../redux/countries/countriesActions';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('test countries Reducer', () => {
  it('countriesFilter action', () => {
    const initialState = {
      countries: [
        {
          name: 'Afghanistan',
        },
        {
          name: 'Albania',
        },
      ],
    };
    const store = mockStore(initialState);
    const filter = 'alBANiA';
    store.dispatch(countriesFilter(filter));
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'COUNTRIES_FILTER', payload: filter }]);
  });

  it('fetchCountriesRequest action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(fetchCountriesRequest());
    expect(store.getActions()).toEqual([{ type: 'COUNTRIES_FETCH_REQUEST' }]);
  });

  it('fetchCountriesSuccess action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const countries = [
      {
        name: 'Afghanistan',
      },
      {
        name: 'Albania',
      },
    ];
    store.dispatch(fetchCountriesSuccess(countries));
    expect(store.getActions()).toEqual([{ type: 'COUNTRIES_FETCH_SUCCESS', payload: countries }]);
  });

  it('fetchCountriesFailure action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const error = 'Error';
    store.dispatch(fetchCountriesFailure(error));
    expect(store.getActions()).toEqual([{ type: 'COUNTRIES_FETCH_FAILURE', payload: error }]);
  });
});
