import { takeEvery, call, put } from "redux-saga/effects";

import api from "../../api";
import {
  FETCH_NEW_QUOTE,
  FETCH_NEW_QUOTE_SUCCESS,
  FETCH_NEW_QUOTE_ERROR,
} from "../actions/types";

// get and set new quote saga
const fetchNewQuote = async () => {
  const {
    data: {
      quotes: [quote],
    },
  } = await api.get("/api/v1/random/1", {
    params: {
      type: "tag",
      val: "motivational",
    },
  });
  return quote;
};

export function* watchFetchNewQuote() {
  yield takeEvery(FETCH_NEW_QUOTE, getQuote);
}

export function* getQuote() {
  try {
    let quote = yield call(fetchNewQuote);
    yield put({
      type: FETCH_NEW_QUOTE_SUCCESS,
      payload: { data: quote, error: null },
    });
  } catch (error) {
    yield put({
      type: FETCH_NEW_QUOTE_ERROR,
      payload: { data: null, error: error },
    });
  }
}
