import React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { colors, globalStyles } from "../themes/globalStyles";

const Loading = () => {
  return (
    <View style={globalStyles.container}>
      <ActivityIndicator size="large" animating={true} color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Loading;
