import React from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

import { colors, globalStyles } from "../../themes/globalStyles";
import { logout } from "../../redux/actions/authActions";

const AccountInfoScreen = ({ logout }) => {
  return (
    <View>
      <Text>AccountInfoScreen!</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfoScreen);
