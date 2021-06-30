import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AboutScreen from "../screens/AboutScreen";

const Stack = createStackNavigator();

const AboutStack = ({ navigation, route }) => {
  React.useEffect(() => {
    navigation.setOptions({ tabBarVisible: false });
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default AboutStack;
