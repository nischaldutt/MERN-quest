import { all } from "redux-saga/effects";

import {
  watchRegisterNewUser,
  watchLoginUser,
  watchLogoutUser,
} from "./authSagas";
import { watchSearchRestaurants } from "./restaurantSagas";

function* rootSaga() {
  yield all([
    watchRegisterNewUser(),
    watchLoginUser(),
    watchLogoutUser(),
    watchSearchRestaurants(),
  ]);
}

export default rootSaga;
