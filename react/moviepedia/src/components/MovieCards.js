import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Typography, Grid } from "@material-ui/core";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "../actions";

const MovieCards = (props) => {
  const [movies, setMovies] = useState([]);

  // memoize fetchMovies() so it does not get
  // created each time with function call in useEffect
  const fetchMovies = useCallback(({ getMovies, moviesInStore }) => {
    getMovies();
    setMovies(moviesInStore);
  }, []);

  useEffect(() => {
    if (props.title === "Popular Movies") {
      if (props.popularMovies.length > 0) {
        setMovies(props.popularMovies);
      } else {
        fetchMovies({
          getMovies: props.fetchPopularMovies,
          moviesInStore: props.popularMovies,
        });
      }
    }

    if (props.title === "Top Rated Movies") {
      if (props.topRatedMovies.length > 0) {
        setMovies(props.topRatedMovies);
      } else {
        fetchMovies({
          getMovies: props.fetchTopRatedMovies,
          moviesInStore: props.topRatedMovies,
        });
      }
    }

    if (props.title === "Upcoming Movies") {
      if (props.upcomingMovies.length > 0) {
        setMovies(props.upcomingMovies);
      } else {
        fetchMovies({
          getMovies: props.fetchUpcomingMovies,
          moviesInStore: props.upcomingMovies,
        });
      }
    }
  }, [props.title, props, fetchMovies]);

  const renderMovies = (movies) => {
    return movies.map((movie) => {
      return (
        <Grid
          style={{ marginTop: "15px" }}
          container
          item
          key={movie.id}
          xs={12}
          sm={6}
          md={4}
          justify="center"
        >
          <MovieCard movie={movie} />
        </Grid>
      );
    });
  };

  return (
    <Grid container direction="column" justify="center" spacing={0}>
      <Grid item container justify="center">
        <Typography variant="h2">{props.title}</Typography>
      </Grid>
      <Grid item container justify="center" spacing={4}>
        {movies.length === 0 ? <Loading /> : renderMovies(movies)}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    popularMovies: state.popularMovies,
    topRatedMovies: state.topRatedMovies,
    upcomingMovies: state.upcomingMovies,
  };
};

export default connect(mapStateToProps, {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
})(MovieCards);
