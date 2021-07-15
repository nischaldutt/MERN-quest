import { SEARCH_RESTAURANTS } from "../actionTypes/yelpActionTypes";

export const searchRestaurants = location => {
  return {
    type: SEARCH_RESTAURANTS,
    location,
  };
};
