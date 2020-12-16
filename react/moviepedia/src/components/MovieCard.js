import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { MOVIE_POSTER_LINK } from "../constants";

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: "#eeeeee",
  },
  media: {
    height: 240,
  },
});

const MovieCard = ({ movie }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={MOVIE_POSTER_LINK + movie.poster_path}
          title={`${movie.original_title}'s poster'`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.original_title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <Typography variant="inherit">
              Release Date: {`${movie.release_date}`}
            </Typography>{" "}
            <br />
            <Typography variant="caption">
              Overview: {`${movie.overview}`}
            </Typography>{" "}
            <br />
            <Typography variant="inherit">
              Rating: {`${movie.vote_average}`}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return { topRatedMovies: state.topRatedMovies };
};

export default connect(mapStateToProps)(MovieCard);
