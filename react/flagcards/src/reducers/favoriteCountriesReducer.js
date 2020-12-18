import { MANAGE_FAVORITES } from "../constants";

const favoriteCountriesReducer = (state = [], action) => {
  switch (action.type) {
    case MANAGE_FAVORITES: {
      if (action.payload.isFavorite) {
        // add to the favorites array
        return [...state, action.payload];
      } else {
        // remove from favorites
        return state.filter((country) => country.name !== action.payload.name);
      }
    }
    default:
      return state;
  }
};

export default favoriteCountriesReducer;
