import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

import Header from "./src/components/Header";
import TodoScreen from "./src/screens/TodoScreen";

import rootReducer from "./src/redux/store";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Header />
          <TodoScreen />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2B138",
  },
});
