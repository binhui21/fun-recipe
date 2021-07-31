import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import LoggedInTabStack from "./components/LoggedInTabStack";
import SignInSignUpScreen from "./screens/SignInSignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import { Provider, useSelector } from "react-redux";
import store from "./redux/configureStore";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

function App() {
  
  const token = useSelector((state) => state.auth.token);
  //const isDark = useSelector((state) => state.accountPrefs.isDark);

return (
  <NavigationContainer>
    
      <Stack.Navigator
        mode="modal"
        headerMode="none"
        //initialRouteName={token != null ? "Logged In" : "SignInSignUp"}
        //animationEnabled={false}
        >
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={SignInSignUpScreen} name="SignInSignUp" />
      
    </Stack.Navigator>
  </NavigationContainer>
);
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
