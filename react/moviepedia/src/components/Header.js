import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import MovieIcon from "@material-ui/icons/Movie";
import { fetchPopularMovies } from "../actions";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    color: "white",
    fontSize: "larger",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  headerTitle: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "larger",
  },
  favorites: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "larger",
  },
}));

const PrimarySearchAppBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <Link to="/">
              <MovieIcon className={classes.menuButton} />
            </Link>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.headerTitle}>
              MoviePedia
            </Link>
          </Typography>
          <div className={classes.grow} />
          <MenuItem>
            <Link to="/top_rated_movies">
              <Typography variant="button" className={classes.favorites}>
                Top Rated
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/upcoming_movies">
              <Typography variant="button" className={classes.favorites}>
                Upcoming
              </Typography>
            </Link>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default connect(null, { fetchPopularMovies })(PrimarySearchAppBar);
