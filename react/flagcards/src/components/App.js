import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import theme from "../themes";
import Header from "./Header";
import CountryCards from "./CountryCards";
import CountryDetails from "./CountryDetails";
import FavoriteCountries from "./FavoriteCountries";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Grid container direction="column">
            <Grid item>
              <Header />
            </Grid>

            <Grid item container>
              <Grid item xs={false} sm={2} />
              <Grid item xs={12} sm={8}>
                <Route path="/" exact component={CountryCards} />
                <Route
                  path={"/countryDetails/:countryName"}
                  exact
                  component={CountryDetails}
                  // render={(props) => <CountryDetails {...props} />}
                />
                <Route path="/favorites" exact component={FavoriteCountries} />
              </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          </Grid>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return { countries: state.countries };
};

export default connect(mapStateToProps)(App);
