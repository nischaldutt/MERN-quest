import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { PersistGate } from "redux-persist/integration/react";
import SplashScreen from "react-native-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

import restrohubTheme from "./themes";
import { store, persistor } from "./redux/store";
import AuthStack from "./navigators/AuthStack";
import Loading from "./components/Loading";

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <PaperProvider theme={restrohubTheme}>
          <SafeAreaProvider style={styles.container}>
            <StatusBar barStyle="light-content" />
            <AuthStack />
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
