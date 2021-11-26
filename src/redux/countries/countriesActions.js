import axios from 'axios';
import {
  COUNTRIES_FETCH_REQUEST,
  COUNTRIES_FETCH_SUCCESS,
  COUNTRIES_FETCH_FAILURE,
  COUNTRIES_FILTER,
} from './countriesTypes';

export const fetchCountriesRequest = () => ({
  type: COUNTRIES_FETCH_REQUEST,
});

export const countriesFilter = (filter) => ({
  type: COUNTRIES_FILTER,
  payload: filter,
});

export const fetchCountriesSuccess = (countries) => ({
  type: COUNTRIES_FETCH_SUCCESS,
  payload: countries,
});

export const fetchCountriesFailure = (error) => ({
  type: COUNTRIES_FETCH_FAILURE,
  payload: error,
});

export const fetchCountries = () => (dispatch) => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  dispatch(fetchCountriesRequest());
  axios
    .get(`https://api.covid19tracking.narrativa.com/api/${date}`)
    .then((response) => {
      const apiResponse = response.data.dates[date].countries;
      const countries = Object.keys(apiResponse).map((key) => (
        {
          ...apiResponse[key],
        }));
      dispatch(fetchCountriesSuccess(countries));
      dispatch(countriesFilter(''));
    })
    .catch((error) => {
      dispatch(fetchCountriesFailure(error));
    });
};
