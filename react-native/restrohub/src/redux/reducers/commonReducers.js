import { SET_IS_LOADING, SET_ALERT } from "../actionTypes/commonActionTypes";

export const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const setAlertReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ALERT: {
      return action.payload;
    }
    default:
      return state;
  }
};
