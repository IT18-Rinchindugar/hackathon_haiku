import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./Onboarding";
export { default as Onboarding } from "./Onboarding";
const AuthenticationStack = createStackNavigator();
export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};
