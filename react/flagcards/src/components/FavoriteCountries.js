import React from "react";
import { connect } from "react-redux";
import { manageFavorites } from "../actions";
import FavoriteGrid from "./FavoritesGrid";

const FavoriteCountries = ({ favoriteCountries, manageFavorites }) => {
  const renderFavorites = () => {
    return <FavoriteGrid favoriteCountries={favoriteCountries} />;
  };
  return <div>{renderFavorites()}</div>;
};

const mapStateToProps = (state) => {
  return { favoriteCountries: state.favoriteCountries };
};

export default connect(mapStateToProps, { manageFavorites })(FavoriteCountries);
