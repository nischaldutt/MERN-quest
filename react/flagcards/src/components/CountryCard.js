import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SimpleModal from "./Modal";
import { manageFavorites } from "../actions";

const useStyles = makeStyles({
  root: {
    width: 345,
    backgroundColor: "#eeeeee",
  },
  media: {
    height: 140,
  },
});

const CountryCard = ({ country, manageFavorites }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={country.flag}
          title={`${country.name}'s flag'`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {country.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Region: {`${country.region}`} <br />
            Capital: {`${country.capital}`} <br />
            Population: {`${country.population}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => manageFavorites(country)}
        >
          {country.isFavorite ? "Added" : "Add To Favorites"}
        </Button>
        <div>
          <SimpleModal countryName={country.name} />
        </div>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return { favoriteCountries: state.favoriteCountries };
};

export default connect(mapStateToProps, { manageFavorites })(CountryCard);
