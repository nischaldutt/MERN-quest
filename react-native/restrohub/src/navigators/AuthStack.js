import React from "react";
import auth from "@react-native-firebase/auth";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

import CustomHeader from "../components/CustomHeader";
import Loading from "../components/Loading";
import AppTabs from "../navigators/AppTabs";
import LoginScreen from "../screens/authScreens/LoginScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";
import ForgotPasswordScreen from "../screens/authScreens/ForgotPasswordScreen";
import AlertSnackbar from "../components/AlertSnackbar";

import { colors, globalStyles } from "../themes/globalStyles";
import { setUser, setIsUserLoggedInStatus } from "../redux/actions/authActions";
import { setIsLoading, setAlert } from "../redux/actions/commonActions";

const Stack = createStackNavigator();

const AuthStack = ({
  isUserLoggedIn,
  setIsUserLoggedInStatus,
  user,
  setUser,
  isLoading,
  setIsLoading,
}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    // Handle user state changes
    function onAuthStateChangedListener(user) {
      if (user) {
        setIsUserLoggedInStatus(true);
        setUser(user._user);
      } else {
        setUser(null);
        setIsUserLoggedInStatus(false);
      }
      setIsLoading(false);
      setInitializing(false);
    }

    const subscriber = auth().onAuthStateChanged(onAuthStateChangedListener);
    return subscriber; // unsubscribe on unmount
  }, [initializing, setUser, setIsUserLoggedInStatus, setIsLoading]);

  const renderAlert = () => {
    return <AlertSnackbar />;
  };

  const renderAuthStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          header: props => <CustomHeader {...props} />,
        }}>
        {isUserLoggedIn ? (
          <Stack.Screen name="Home" component={AppTabs} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignUpScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </>
        )}
      </Stack.Navigator>
    );
  };

  return (
    <View style={globalStyles.container}>
      {initializing || isLoading ? (
        <Loading />
      ) : (
        <>
          {renderAuthStack()}
          {renderAlert()}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.isLoading,
  user: state.user,
  isUserLoggedIn: state.isUserLoggedIn,
  alert: state.alert,
});

const mapDispatchToProps = {
  setUser,
  setIsUserLoggedInStatus,
  setIsLoading,
  setAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthStack);
