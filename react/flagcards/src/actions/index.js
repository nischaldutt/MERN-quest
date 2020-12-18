import restCountries from "../api/restCountries";
import {
  FETCH_COUNTRIES,
  FETCH_COUNTRY_DETAILS,
  MANAGE_FAVORITES,
  SEARCH_COUNTRIES,
} from "../constants";

export const fetchCountries = (countryName) => async (dispatch) => {
  let response;
  if (!countryName) {
    response = await restCountries.get("/all");
    return dispatch({
      type: FETCH_COUNTRIES,
      payload: response.data,
    });
  } else {
    response = await restCountries.get(`/name/${countryName}`);
    return dispatch({
      type: SEARCH_COUNTRIES,
      payload: response.data,
    });
  }
};

// export const fetchCountries = (countryName) => async (dispatch) => {
//   const response = !countryName
//     ? await restCountries.get("/all")
//     : await restCountries.get(`/name/${countryName}`);
//   dispatch({
//     type: FETCH_COUNTRIES,
//     payload: response.data,
//   });
// };

export const fetchCountryDetails = (countryName) => async (dispatch) => {
  const { data } = await restCountries.get(`/name/${countryName}`);
  const country = data.find(
    (country) => country.name.toLowerCase() === countryName.toLowerCase()
  );

  dispatch({
    type: FETCH_COUNTRY_DETAILS,
    payload: country,
  });
};

export const manageFavorites = (country) => {
  country.isFavorite = country.isFavorite ? false : true;
  return {
    type: MANAGE_FAVORITES,
    payload: country,
  };
};
