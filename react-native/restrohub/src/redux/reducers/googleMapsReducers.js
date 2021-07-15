import {
  SAVE_RESTAURANTS_SUCCESS,
  SAVE_RESTAURANTS_ERROR,
  CLEAR_RESTAURANTS,
} from "../actionTypes/googleMapsActionTypes";

const initialRestaurantObj = {
  data: null,
  error: null,
};

export const restaurantReducer = (state = initialRestaurantObj, action) => {
  switch (action.type) {
    case SAVE_RESTAURANTS_SUCCESS: {
      return action.payload;
    }
    case SAVE_RESTAURANTS_ERROR: {
      return action.payload;
    }
    case CLEAR_RESTAURANTS: {
      return initialRestaurantObj;
    }
    default:
      return state;
  }
};
