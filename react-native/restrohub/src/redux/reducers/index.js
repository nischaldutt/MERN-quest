import { combineReducers } from "redux";

import { isLoadingReducer, setAlertReducer } from "./commonReducers";
import { isUserLoggedInReducer, userReducer } from "./authReducers";
// import { restaurantReducer } from "./yelpReducers";
import { restaurantReducer } from "./googleMapsReducers";

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  isUserLoggedIn: isUserLoggedInReducer,
  user: userReducer,
  restaurants: restaurantReducer,
  alert: setAlertReducer,
});

export default rootReducer;
