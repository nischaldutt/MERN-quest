import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/appScreens/HomeScreen";
import AccountInfoScreen from "../screens/appScreens/AccountInfoScreen";
import BookmarksScreen from "../screens/appScreens/BookmarksScreen";

const Tab = createBottomTabNavigator();

const renderTabBarIcons = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    switch (route.name) {
      case "Home": {
        iconName = focused ? "home" : "home-outline";
        break;
      }
      case "Bookmarks": {
        iconName = focused ? "bookmarks" : "bookmarks-outline";
        break;
      }
      case "Account": {
        iconName = focused ? "person" : "person-outline";
        break;
      }
      default: {
        iconName = "add-circle";
      }
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const AppTabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={renderTabBarIcons}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.accent,
        inactiveTintColor: colors.accent,
        style: {
          backgroundColor: colors.primary,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
      <Tab.Screen name="Account" component={AccountInfoScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;
