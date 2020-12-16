import movieDB from "../api/movieDB";
import {
  FETCH_POPULAR_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  FETCH_UPCOMING_MOVIES,
} from "../constants";

export const fetchPopularMovies = () => async (dispatch) => {
  const response = await movieDB.get("/popular");
  dispatch({
    type: FETCH_POPULAR_MOVIES,
    payload: response.data.results,
  });
};

export const fetchTopRatedMovies = () => async (dispatch) => {
  const response = await movieDB.get("/top_rated");
  dispatch({
    type: FETCH_TOP_RATED_MOVIES,
    payload: response.data.results,
  });
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  const response = await movieDB.get("/upcoming");
  dispatch({
    type: FETCH_UPCOMING_MOVIES,
    payload: response.data.results,
  });
};
