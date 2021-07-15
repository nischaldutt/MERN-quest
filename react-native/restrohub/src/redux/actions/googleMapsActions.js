import { SEARCH_RESTAURANTS } from "../actionTypes/googleMapsActionTypes";

export const searchRestaurants = location => {
  return {
    type: SEARCH_RESTAURANTS,
    location,
  };
};
