import {
  REGIONS_FETCH_SUCCESS,
  REGIONS_FETCH_FAILURE,
  REGIONS_FETCH_REQUEST,
  COUNTRY_FETCH_SUCCESS,
} from "./regionsTypes";

const initialState = {
  regions: [],
  loading: false,
  error: null,
  country: {},
};

const regionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGIONS_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGIONS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        regions: action.payload,
      };
    case REGIONS_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case COUNTRY_FETCH_SUCCESS:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default regionsReducer;