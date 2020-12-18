import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import countryDetailsReducer from "./countryDetailsReducer";
import favoriteCountriesReducer from "./favoriteCountriesReducer";
import searchCountriesReducer from "./searchCountriesReducer";

export default combineReducers({
  countries: countriesReducer,
  currentCountry: countryDetailsReducer,
  favoriteCountries: favoriteCountriesReducer,
  // selectedCountry: selectCountryReducer,
  searchedCountries: searchCountriesReducer,
});
