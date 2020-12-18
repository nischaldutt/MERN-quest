import React, { useEffect } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CountryCard from "./CountryCard";
import Loading from "./Loading";
import { fetchCountries } from "../actions";

const CountryCards = ({ countries, searchedCountries, fetchCountries }) => {
  useEffect(() => {
    searchedCountries.length = 0;
  });

  useEffect(() => {
    if (countries.length === 0) {
      fetchCountries();
    }
  }, []);

  const renderSearchedCountries = () => {
    return searchedCountries.map((country) => {
      return (
        <Grid
          style={{ marginTop: "15px" }}
          container
          item
          key={country.name}
          xs={12}
          sm={4}
          justify="center"
        >
          <CountryCard country={country} />
        </Grid>
      );
    });
  };

  const renderCountries = () => {
    return countries.map((country) => {
      return (
        <Grid
          style={{ marginTop: "15px" }}
          container
          item
          key={country.name}
          xs={12}
          sm={6}
          md={4}
          justify="center"
        >
          <CountryCard country={country} />
        </Grid>
      );
    });
  };

  return (
    <Grid container justify="center" spacing={4}>
      {countries.length === 0 ? (
        <Loading />
      ) : searchedCountries.length === 0 ? (
        renderCountries()
      ) : (
        renderSearchedCountries()
      )}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    searchedCountries: state.searchedCountries,
  };
};

export default connect(mapStateToProps, { fetchCountries })(CountryCards);
