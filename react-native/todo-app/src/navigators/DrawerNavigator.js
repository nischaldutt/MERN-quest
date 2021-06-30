import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TodoScreen from "../screens/TodoScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabNavigator from "../navigators/TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (
    <Drawer.Navigator initialRouteName="Todos">
      <Drawer.Screen name="Todos" component={TodoScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
