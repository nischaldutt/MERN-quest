import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import { fetchCountryDetails } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  flag: {
    height: 200,
  },
}));

const CountryDetails = (props) => {
  const classes = useStyles();

  const {
    match: {
      params: { countryName },
    },
  } = props;

  useEffect(() => {
    const getCountries = async () => {
      await props.fetchCountryDetails(countryName);
    };
    getCountries();
  }, [countryName]);

  const renderCountryDetails = () => {
    const { currentCountry: country } = props;
    if (country) {
      return (
        <div className={classes.root}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography variant="h1">{country.name}</Typography>
            <img
              className={classes.flag}
              src={country.flag}
              alt={`${country.name}'s flag`}
            />
          </Paper>
        </div>
      );
    }
  };

  return <div>{renderCountryDetails()}</div>;
};

const mapStateToProps = (state) => {
  return { currentCountry: state.currentCountry };
};

export default connect(mapStateToProps, { fetchCountryDetails })(
  CountryDetails
);
