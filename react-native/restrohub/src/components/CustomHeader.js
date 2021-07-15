import React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Header } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

import { colors, globalStyles } from "../themes/globalStyles";

const HeaderIcon = () => {
  return (
    <Ionicons name="fast-food" size={30} color={colors.accent} />
    // <Image
    //   source={{
    //     uri: require("/src/images/logo.png"),
    //   }}
    //   style={styles.headerIconStyles}
    // />
  );
};

const CustomHeader = () => {
  return (
    <Header
      backgroundColor={colors.primary}
      placement="left"
      leftComponent={<HeaderIcon />}
      centerComponent={{ text: "RestroHub", style: styles.headerTitleStyles }}
    />
  );
};

const styles = StyleSheet.create({
  headerIconStyles: {
    width: 40,
    height: 40,
  },
  headerTitleStyles: {
    color: colors.accent,
    fontWeight: "bold",
    fontSize: 20,
  },
});

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);
