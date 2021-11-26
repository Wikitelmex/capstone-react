import configureStore from 'redux-mock-store';

import {
  regionsFilter,
  fetchCountry,
  fetchRegionsRequest,
  fetchRegionsSuccess,
  fetchRegionsFailure,
} from '../redux/regions/regionsActions';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('test regions Reducer', () => {
  it('regionsFilter action', () => {
    const initialState = {
      regions: [
        {
          name: 'Chihuahua',
        },
        {
          name: 'Chiapas',
        },
      ],
    };
    const store = mockStore(initialState);
    const filter = 'chiaPA';
    store.dispatch(regionsFilter(filter));
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'REGIONS_FILTER', payload: filter }]);
  });

  it('fetchRegionsRequest action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(fetchRegionsRequest());
    expect(store.getActions()).toEqual([{ type: 'REGIONS_FETCH_REQUEST' }]);
  });

  it('fetchRegionsSuccess action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const regions= [
      {
        name: 'Chihuahua',
      },
      {
        name: 'Chiapas',
      },
    ];
    store.dispatch(fetchRegionsSuccess(regions));
    expect(store.getActions()).toEqual([{ type: 'REGIONS_FETCH_SUCCESS', payload: regions }]);
  });

  it('fetchRegionsFailure action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const error = 'Error';
    store.dispatch(fetchRegionsFailure(error));
    expect(store.getActions()).toEqual([{ type: 'REGIONS_FETCH_FAILURE', payload: error }]);
  });

  it('fetchCountry action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const country = 'Mexico';
    store.dispatch(fetchCountry(country));
    expect(store.getActions()).toEqual([{ type: 'COUNTRY_FETCH_SUCCESS', payload: country }]);
  });
});
