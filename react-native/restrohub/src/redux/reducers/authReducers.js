import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SET_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  SET_IS_USER_LOGGED_IN_STATUS,
  REGISTER_NEW_USER_SUCCESS,
  REGISTER_NEW_USER_ERROR,
} from "../actionTypes/authActionTypes";

const initialUser = {
  data: null,
  error: null,
};

export const isUserLoggedInReducer = (state = false, action) => {
  switch (action.type) {
    case SET_IS_USER_LOGGED_IN_STATUS: {
      return action.payload;
    }
    case LOGOUT_USER_SUCCESS: {
      return false;
    }
    default:
      return state;
  }
};

export const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS: {
      return action.payload;
    }
    case LOGIN_USER_ERROR: {
      return action.payload;
    }
    case SET_USER: {
      return action.payload;
    }
    case LOGOUT_USER_SUCCESS: {
      return action.payload;
    }
    case LOGOUT_USER_ERROR: {
      return action.payload;
    }
    case REGISTER_NEW_USER_SUCCESS: {
      return action.payload;
    }
    case REGISTER_NEW_USER_ERROR: {
      return action.payload;
    }
    default:
      return state;
  }
};
