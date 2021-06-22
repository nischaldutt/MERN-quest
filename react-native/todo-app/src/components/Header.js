import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    marginTop: 40,
  },
  title: {
    textAlign: "center",
    color: "#003F63",
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default Header;
