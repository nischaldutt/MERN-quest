import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { Button } from "react-native-elements";

import { changeCurrentTodosStatus } from "../redux/actions/todoActions";
import {
  ALL_TODOS,
  COMPLETED_TODOS,
  INCOMPLETE_TODOS,
} from "../properties/constants";

const StatusTabs = ({ changeCurrentTodosStatus }) => {
  return (
    <View style={styles.container}>
      <Button
        title="All"
        onPress={() => changeCurrentTodosStatus(ALL_TODOS)}
        buttonStyle={styles.btnStyles}
      />
      <Button
        title="Completed"
        onPress={() => changeCurrentTodosStatus(COMPLETED_TODOS)}
        buttonStyle={styles.btnStyles}
      />
      <Button
        title="Incomplete"
        onPress={() => changeCurrentTodosStatus(INCOMPLETE_TODOS)}
        buttonStyle={styles.btnStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
  },
  btnStyles: {
    width: 100,
    height: 40,
    backgroundColor: "#003F63",
  },
});

const mapStateToProps = (state, ownProps) => ({
  currentTodosStatus: state.currentTodosStatus,
});

const mapDispatchToProps = {
  changeCurrentTodosStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusTabs);
