import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

Ionicons.loadFont();

const FormInput = ({
  autoFocus,
  secureTextEntry,
  errorMessage,
  label,
  leftIconName,
  leftIconSize,
  placeholder,
  value,
  handleInputChange,
  onBlur,
}) => {
  return (
    <Input
      autoCapitalize="none"
      containerStyle={styles.container}
      autoFocus={autoFocus}
      secureTextEntry={secureTextEntry}
      errorMessage={errorMessage}
      label={label}
      leftIcon={<Ionicons name={leftIconName} size={leftIconSize} />}
      placeholder={placeholder}
      value={value}
      onChangeText={handleInputChange}
      onBlur={onBlur}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    padding: 10,
  },
});

export default FormInput;
