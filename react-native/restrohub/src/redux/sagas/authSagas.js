import { takeEvery, call, put } from "@redux-saga/core/effects";

import {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  logout,
} from "../../services/firebase/authServices";
import {
  REGISTER_NEW_USER,
  REGISTER_NEW_USER_SUCCESS,
  REGISTER_NEW_USER_ERROR,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  SET_IS_USER_LOGGED_IN_STATUS,
} from "../actionTypes/authActionTypes";
import { CLEAR_RESTAURANTS } from "../actionTypes/googleMapsActionTypes";
import {
  LOGIN_SUCCESSFUL,
  LOGOUT_SUCCESSFUL,
  SIGN_UP_SUCCESSFUL,
} from "../../properties/constants";
import { SET_IS_LOADING, SET_ALERT } from "../actionTypes/commonActionTypes";

// register a new user with email and password
export function* watchRegisterNewUser() {
  yield takeEvery(REGISTER_NEW_USER, registerNewUser);
}

export function* registerNewUser({ email, password }) {
  try {
    const { user } = yield call(registerWithEmailAndPassword, email, password);
    // save user in the redux store
    yield put({
      type: REGISTER_NEW_USER_SUCCESS,
      payload: { data: user, error: null },
    });
    // set user online status to true
    yield put({
      type: SET_IS_USER_LOGGED_IN_STATUS,
      payload: true,
    });
    // alert user about sign up success
    yield put({
      type: SET_ALERT,
      payload: SIGN_UP_SUCCESSFUL,
    });
  } catch (error) {
    console.log(error.code);

    yield put({
      type: SET_IS_LOADING,
      payload: false,
    });

    yield put({
      type: REGISTER_NEW_USER_ERROR,
      payload: { data: null, error: error.code },
    });
  }
}

// login user
export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export function* loginUser({ email, password }) {
  try {
    const { user } = yield call(loginWithEmailAndPassword, email, password);
    // save user in the redux store
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: { data: user, error: null },
    });
    // set user online status to true
    yield put({
      type: SET_IS_USER_LOGGED_IN_STATUS,
      payload: true,
    });
    // alert user about login success
    yield put({
      type: SET_ALERT,
      payload: LOGIN_SUCCESSFUL,
    });
  } catch (error) {
    console.log(error.code);
    yield put({
      type: SET_IS_LOADING,
      payload: false,
    });

    yield put({
      type: LOGIN_USER_ERROR,
      payload: { data: null, error: error.code },
    });
  }
}

// logout user
export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export function* logoutUser() {
  try {
    yield call(logout);
    // delete the user from redux store
    yield put({
      type: LOGOUT_USER_SUCCESS,
      payload: { data: null, error: null },
    });
    // set user online status to false
    yield put({
      type: SET_IS_USER_LOGGED_IN_STATUS,
      payload: false,
    });
    // clear the fetched restaurant data from the the store
    yield put({
      type: CLEAR_RESTAURANTS,
    });
    // alert user about logout success
    yield put({
      type: SET_ALERT,
      payload: LOGOUT_SUCCESSFUL,
    });
  } catch (error) {
    yield put({
      type: SET_IS_LOADING,
      payload: false,
    });

    yield put({
      type: LOGOUT_USER_ERROR,
      payload: { data: null, error: error.code },
    });
  }
}
