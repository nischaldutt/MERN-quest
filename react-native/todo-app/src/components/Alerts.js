import { Alert } from "react-native";

export const renderEmptyInputAlert = (inputProp) => {
  Alert.alert("Input Missing!", `Please enter the ${inputProp}.`, [
    {
      text: "OK",
    },
  ]);
};
