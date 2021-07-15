import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const CustomButton = ({ title, onPress, disabled, fontColor, bgColor }) => {
  return (
    <Button
      disabled={disabled}
      buttonStyle={{ ...styles.buttonStyles, backgroundColor: bgColor }}
      containerStyle={styles.containerStyle}
      titleStyle={{ ...styles.titleStyle, color: fontColor }}
      onPress={onPress}
      title={title}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    height: 50,
  },
  containerStyle: {
    width: "50%",
    margin: 10,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CustomButton;
