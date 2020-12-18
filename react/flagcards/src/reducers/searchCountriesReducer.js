import { SEARCH_COUNTRIES } from "../constants";

const searchCountriesReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default searchCountriesReducer;
