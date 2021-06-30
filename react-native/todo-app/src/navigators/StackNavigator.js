import React from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../components/Header";
import DrawerNavigator from "./DrawerNavigator";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const StackRouter = ({ isSignedIn }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          header: () => <Header navigation={navigation} />,
        })}
      >
        {isSignedIn ? (
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  isSignedIn: state.isSignedIn,
});

const mapStateToDispatch = {};

export default connect(mapStateToProps, mapStateToDispatch)(StackRouter);
