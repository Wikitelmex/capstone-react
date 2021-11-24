import axios from 'axios';
import {
  REGIONS_FETCH_SUCCESS,
  REGIONS_FETCH_FAILURE,
  REGIONS_FETCH_REQUEST,
  COUNTRY_FETCH_SUCCESS,
  REGIONS_FILTER
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

export const fetchRegions = () => (dispatch) => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  dispatch(fetchRegionsRequest());
  axios
    .get(`https://api.covid19tracking.narrativa.com/api/${date}/country/mexico`)
    .then((response) => {
      const totalData = Object.keys(response.data.dates).map((key) => (
        {
          name: response.data.dates[key].countries.Mexico.name,
          source: response.data.dates[key].countries.Mexico.source,
          today_confirmed: response.data.dates[key].countries.Mexico.today_confirmed,
          today_deaths: response.data.dates[key].countries.Mexico.today_deaths,
          today_new_confirmed: response.data.dates[key].countries.Mexico.today_new_confirmed,
          today_new_deaths: response.data.dates[key].countries.Mexico.today_new_deaths,
          today_new_open_cases: response.data.dates[key].countries.Mexico.today_new_open_cases,
          today_new_recovered: response.data.dates[key].countries.Mexico.today_new_recovered,
          today_open_cases: response.data.dates[key].countries.Mexico.today_open_cases,
          today_recovered: response.data.dates[key].countries.Mexico.today_recovered,
          today_vs_yesterday_confirmed:
            response.data.dates[key].countries.Mexico.today_vs_yesterday_confirmed,
          today_vs_yesterday_deaths:
            response.data.dates[key].countries.Mexico.today_vs_yesterday_deaths,
          today_vs_yesterday_open_cases:
            response.data.dates[key].countries.Mexico.today_vs_yesterday_open_cases,
          today_vs_yesterday_recovered:
            response.data.dates[key].countries.Mexico.today_vs_yesterday_recovered,
          yesterday_confirmed: response.data.dates[key].countries.Mexico.yesterday_confirmed,
          yesterday_deaths: response.data.dates[key].countries.Mexico.yesterday_deaths,
          yesterday_open_cases: response.data.dates[key].countries.Mexico.yesterday_open_cases,
          yesterday_recovered: response.data.dates[key].countries.Mexico.yesterday_recovered,
          regions: response.data.dates[key].countries.Mexico.regions.map((region) => (
            {
              id: region.id,
              name: region.name,
              source: region.source,
              today_confirmed: region.today_confirmed,
              today_deaths: region.today_deaths,
              today_new_confirmed: region.today_new_confirmed,
              today_new_deaths: region.today_new_deaths,
            })),
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
