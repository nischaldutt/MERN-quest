import { all, call } from "redux-saga/effects";
import { watchFetchNewQuote, getQuote } from "./quoteSaga";

export default function* rootSaga() {
  yield all([watchFetchNewQuote(), getQuote()]);
}
