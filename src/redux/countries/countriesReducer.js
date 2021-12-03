import {
  COUNTRIES_FETCH_REQUEST,
  COUNTRIES_FETCH_SUCCESS,
  COUNTRIES_FETCH_FAILURE,
  COUNTRIES_FILTER,
} from './countriesTypes';

const initialState = {
  countries: [],
  countriesFiltered: [],
  loading: false,
  error: null,
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COUNTRIES_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    case COUNTRIES_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case COUNTRIES_FILTER:
      return {
        ...state,
        countriesFiltered: state.countries.filter(
          (country) => country.name.toLowerCase().includes(action.payload.toLowerCase()),
        ),
      };
    default:
      return state;
  }
};

export default countriesReducer;
