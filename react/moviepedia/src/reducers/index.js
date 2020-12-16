import { combineReducers } from "redux";
import topRatedMoviesReducer from "./topRatedMoviesReducer";
import upcomingMoviesReducer from "./upcomingMoviesReducer";
import popularMoviesReducer from "./popularMoviesReducer";

export default combineReducers({
  popularMovies: popularMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  upcomingMovies: upcomingMoviesReducer,
});
