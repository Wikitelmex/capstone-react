import axios from "axios";
import {
  REGIONS_FETCH_SUCCESS,
  REGIONS_FETCH_FAILURE,
  REGIONS_FETCH_REQUEST,
  COUNTRY_FETCH_SUCCESS,
} from "./regionsTypes";

export const fetchCountry = (country) => {
  return {
    type: COUNTRY_FETCH_SUCCESS,
    payload: country
  };
}; 

export const fetchRegionsRequest = () => {
  return {
    type: REGIONS_FETCH_REQUEST
  };
};

export const fetchRegionsSuccess = regions => {
  return {
    type: REGIONS_FETCH_SUCCESS,
    payload: regions
  };
};

export const fetchRegionsFailure = error => {
  return {
    type: REGIONS_FETCH_FAILURE,
    payload: error
  };
};

export const fetchRegions = (dispatch) => {
  
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  dispatch(fetchRegionsRequest());
  axios
    .get(`https://api.covid19tracking.narrativa.com/api/${date}/country/mexico`)
    .then(response => {
      const {regions, ...countryData} = response.data;
      dispatch(fetchRegionsSuccess(regions));
      dispatch(fetchCountry(countryData));
    })
    .catch(error => {
      dispatch(fetchRegionsFailure(error));
    });
}