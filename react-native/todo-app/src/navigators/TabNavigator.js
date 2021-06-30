import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  getFocusedRouteNameFromRoute,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import AboutStack from "../navigators/AboutStack";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const screenProps = ({ navigation, route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    size = 25;

    switch (route.name) {
      case "Settings": {
        iconName = focused ? "settings" : "settings-outline";
        break;
      }
      case "About": {
        iconName = focused
          ? "ios-information-circle-sharp"
          : "ios-information-circle-outline";
        break;
      }
      default:
        break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

// const setTabBarVisible = (navigation, route) => {
//   const routeName = getFocusedRouteNameFromRoute(route);
//   console.log(useRoute());
//   const hideOnScreens = ["About"];
//   if (hideOnScreens.indexOf(routeName) > -1) return false;
//   return true;
// };

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={screenProps}
      tabBarOptions={{
        activeTintColor: "#003F63",
        inactiveTintColor: "gray",
        labelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="About" component={AboutStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
