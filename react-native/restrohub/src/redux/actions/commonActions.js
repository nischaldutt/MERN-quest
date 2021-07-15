import { SET_IS_LOADING, SET_ALERT } from "../actionTypes/commonActionTypes";

export const setIsLoading = status => {
  return {
    type: SET_IS_LOADING,
    payload: status,
  };
};

export const setAlert = alert => {
  return {
    type: SET_ALERT,
    payload: alert,
  };
};
