import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { manageFavorites } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: "15px",
  },
  gridList: {
    width: "100",
    height: "100",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const TitlebarGridList = ({ favoriteCountries, manageFavorites }) => {
  const classes = useStyles();

  const removeFromFavorites = (country) => {
    manageFavorites(country);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" style={{ fontWeight: "bold", margin: "auto" }}>
        Favorite Countries
      </Typography>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={2}
          style={{ height: "auto" }}
        ></GridListTile>
        {favoriteCountries.map((country) => (
          <GridListTile key={country.name}>
            <img src={country.flag} alt={`${country.name}'s flag`} />
            <GridListTileBar
              title={country.name}
              actionIcon={
                <IconButton
                  aria-label={`info about ${country.name}`}
                  className={classes.icon}
                  onClick={() => removeFromFavorites(country)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { favoriteCountries: state.favoriteCountries };
};

export default connect(mapStateToProps, { manageFavorites })(TitlebarGridList);
