import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import theme from "../themes";
import Header from "./Header";
import MovieCards from "./MovieCards";
import createBrowserHistory from "../history";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router history={createBrowserHistory}>
          <Grid container direction="column">
            <Grid item>
              <Header />
            </Grid>

            <Grid item container>
              <Grid item xs={false} sm={2} />
              <Grid item xs={12} sm={8}>
                <Switch>
                  <Route
                    path="/"
                    exact
                    render={(props) => (
                      <MovieCards {...props} title="Popular Movies" />
                    )}
                  />
                  <Route
                    path="/top_rated_movies"
                    exact
                    render={(props) => (
                      <MovieCards {...props} title="Top Rated Movies" />
                    )}
                  />
                  <Route
                    path="/upcoming_movies"
                    exact
                    render={(props) => (
                      <MovieCards {...props} title="Upcoming Movies" />
                    )}
                  />
                </Switch>
              </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          </Grid>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
