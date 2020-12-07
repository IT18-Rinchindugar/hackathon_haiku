import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthenticationNavigator } from "./src/screens/Authentication";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeNavigator } from "./src/screens/Home";

const AppStack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Home" component={HomeNavigator} />
          <AppStack.Screen
            name="Authentication"
            component={AuthenticationNavigator}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
