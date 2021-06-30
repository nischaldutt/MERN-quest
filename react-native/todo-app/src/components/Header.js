import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

import { signOut } from "../redux/actions/authActions";

const Header = ({ isSignedIn, signOut, navigation }) => {
  const handleLogout = () => {
    signOut();
  };

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.container}>
      {isSignedIn && (
        <Ionicons onPress={openDrawer} name="menu" size={24} color="#003F63" />
      )}
      <Text style={styles.title}>todos</Text>
      {isSignedIn && (
        <Button
          title="Logout"
          onPress={handleLogout}
          buttonStyle={styles.logoutBtn}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2B138",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#003F63",
    fontSize: 40,
    fontWeight: "bold",
  },
  logoutBtn: {
    padding: 10,
    width: 100,
    height: 40,
    backgroundColor: "#003F63",
  },
});

const mapStateToProps = (state, ownProps) => ({
  isSignedIn: state.isSignedIn,
});

const mapDispatchToProps = {
  signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
