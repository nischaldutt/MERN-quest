import {
  SAVE_RESTAURANTS_SUCCESS,
  SAVE_RESTAURANTS_ERROR,
} from "../actionTypes/yelpActionTypes";

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
    default:
      return state;
  }
};
