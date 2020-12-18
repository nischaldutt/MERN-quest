import React from "react";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  switch: {
    color: "white",
  },
});

const DrawerTab = ({ countries, favoriteCountries, searchedCountries }) => {
  const classes = useStyles();
  const currentRoute = useLocation();
  const [state, setState] = React.useState({
    right: false,
  });

  const compare = (a, b) => {
    if (a.population < b.population) return -1;
    if (a.population > b.population) return 1;
    return 0;
  };

  const sortCountries = () => {
    if (currentRoute.pathname === "/") {
      countries.sort(compare);
    } else if (currentRoute.pathname === "/favorites") {
      favoriteCountries.sort(compare);
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {
          <ListItem button onClick={sortCountries}>
            <ListItemIcon>
              <SortIcon />
            </ListItemIcon>
            <ListItemText primary={"Sort By Population"} />
          </ListItem>
        }
      </List>
      <Divider />
    </div>
  );

  return (
    <React.Fragment>
      <Button className={classes.switch} onClick={toggleDrawer("right", true)}>
        Switch
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    favoriteCountries: state.favoriteCountries,
    searchedCountries: state.searchedCountries,
  };
};

export default connect(mapStateToProps, {})(DrawerTab);
