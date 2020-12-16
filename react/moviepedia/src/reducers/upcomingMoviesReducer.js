import { FETCH_UPCOMING_MOVIES } from "../constants";

const upcomingMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_UPCOMING_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

export default upcomingMoviesReducer;
