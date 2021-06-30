import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";

import { Button } from "react-native-elements";

import { renderEmptyInputAlert } from "../components/Alerts";
import { signIn } from "../redux/actions/authActions";

const LoginScreen = ({ signIn }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const changeUsername = (value) => {
    setUsername(value);
  };

  const changePassword = (value) => {
    setPassword(value);
  };

  const submitHandler = () => {
    if (username.trim() === "") {
      return renderEmptyInputAlert("username");
    } else if (password.trim() === "") {
      return renderEmptyInputAlert("password");
    } else {
      signIn();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        style={styles.userInput}
        autoCompleteType="name"
        placeholder="Enter username"
        value={username}
        onChangeText={changeUsername}
      />

      <TextInput
        style={styles.userInput}
        secureTextEntry
        placeholder="Enter password"
        value={password}
        onChangeText={changePassword}
      />

      <Button
        title="Sign In"
        onPress={submitHandler}
        buttonStyle={styles.signInBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2B138",
  },
  userInput: {
    marginTop: 20,
    width: "70%",
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    borderColor: "#F2B138",
  },
  signInBtn: {
    padding: 10,
    width: 150,
    height: 50,
    margin: 40,
    backgroundColor: "#003F63",
  },
});

const mapStateProps = () => ({});

const mapDispatchToProps = {
  signIn,
};

export default connect(mapStateProps, mapDispatchToProps)(LoginScreen);
