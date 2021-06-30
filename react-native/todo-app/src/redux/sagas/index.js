import { all } from "redux-saga/effects";
import { watchFetchNewQuote } from "./quoteSaga";

export default function* rootSaga() {
  yield all([watchFetchNewQuote()]);
}
