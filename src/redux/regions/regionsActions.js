import axios from 'axios';
import {
  REGIONS_FETCH_SUCCESS,
  REGIONS_FETCH_FAILURE,
  REGIONS_FETCH_REQUEST,
  COUNTRY_FETCH_SUCCESS,
  REGIONS_FILTER,
} from './regionsTypes';

export const fetchCountry = (country) => ({
  type: COUNTRY_FETCH_SUCCESS,
  payload: country,
});

export const fetchRegionsRequest = () => ({
  type: REGIONS_FETCH_REQUEST,
});

export const regionsFilter = (filter) => ({
  type: REGIONS_FILTER,
  payload: filter,
});

export const fetchRegionsSuccess = (regions) => ({
  type: REGIONS_FETCH_SUCCESS,
  payload: regions,
});

export const fetchRegionsFailure = (error) => ({
  type: REGIONS_FETCH_FAILURE,
  payload: error,
});

export const fetchRegions = (countryId = 'mexico') => (dispatch) => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const date = `${today.getFullYear()}-${mm}-${dd}`;

  dispatch(fetchRegionsRequest());
  axios
    .get(`https://api.covid19tracking.narrativa.com/api/${date}/country/${countryId}`)
    .then((response) => {
      const apiResponse = response.data.dates[date].countries;
      const totalData = Object.keys(apiResponse).map((key) => (
        {
          ...apiResponse[key],
        }))[0];

      const { regions, ...countryData } = totalData;

      dispatch(fetchRegionsSuccess(regions));
      dispatch(fetchCountry(countryData));
      dispatch(regionsFilter(''));
    })
    .catch((error) => {
      dispatch(fetchRegionsFailure(error));
    });
};
