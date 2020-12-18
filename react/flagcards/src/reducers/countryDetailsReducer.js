import { FETCH_COUNTRY_DETAILS } from "../constants";

const countryDetailsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default countryDetailsReducer;
