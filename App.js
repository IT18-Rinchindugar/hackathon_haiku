import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthenticationNavigator } from "./src/screens/Authentication";
import { HomeNavigator } from "./src/screens/Home";

const AppStack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={HomeNavigator} />
        <AppStack.Screen
          name="Authentication"
          component={AuthenticationNavigator}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
