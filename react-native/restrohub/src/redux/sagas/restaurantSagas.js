import { takeEvery, call, put } from "@redux-saga/core/effects";

// import { getRestaurantsFromYelp } from "../../services/yelp/yelpServices";
import { getRestaurantsFromGoogleMaps } from "../../services/googleMaps/googleMapsServices";
import { SET_IS_LOADING } from "../actionTypes/commonActionTypes";
import {
  SEARCH_RESTAURANTS,
  SAVE_RESTAURANTS_SUCCESS,
  SAVE_RESTAURANTS_ERROR,
} from "../actionTypes/googleMapsActionTypes";

// search for the restaurants
export function* watchSearchRestaurants() {
  yield takeEvery(SEARCH_RESTAURANTS, searchRestaurants);
}

export function* searchRestaurants({ location }) {
  try {
    const {
      data: { results },
    } = yield call(getRestaurantsFromGoogleMaps, location);
    // console.log(results);

    yield put({
      type: SAVE_RESTAURANTS_SUCCESS,
      payload: { data: results, error: null },
    });

    yield put({
      type: SET_IS_LOADING,
      payload: false,
    });
  } catch (error) {
    console.log(error);

    yield put({
      type: SET_IS_LOADING,
      payload: false,
    });

    yield put({
      type: SAVE_RESTAURANTS_ERROR,
      payload: { data: null, error: error },
    });
  }
}
