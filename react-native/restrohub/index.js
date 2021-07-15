/**
 * @format
 */

import "react-native-gesture-handler";
import React from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import App from "./src/App";
import { name as appName } from "./app.json";

export default function Index() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Index);
