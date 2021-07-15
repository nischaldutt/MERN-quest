import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_USER,
  REGISTER_NEW_USER,
  SET_IS_USER_LOGGED_IN_STATUS,
} from "../actionTypes/authActionTypes";

export const loginWithEmailAndPassword = (email, password) => {
  return {
    type: LOGIN_USER,
    email,
    password,
  };
};

export const registerNewUserWithEmailAndPassword = (email, password) => {
  return {
    type: REGISTER_NEW_USER,
    email,
    password,
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const setUser = user => {
  return {
    type: SET_USER,
    payload: { data: user, error: null },
  };
};

export const setIsUserLoggedInStatus = status => {
  return {
    type: SET_IS_USER_LOGGED_IN_STATUS,
    payload: status,
  };
};
