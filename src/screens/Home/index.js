import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Feed, Feedback } from "./Feed";
import { Chatbot } from "./Chatbot";
import { Maps } from "./Maps";
import { createStackNavigator } from "@react-navigation/stack";

const FeedStack = createStackNavigator();
const HomeStack = createBottomTabNavigator();
export const HomeDefaultNavigator = () => {
  return (
    <FeedStack.Navigator headerMode="none">
      <FeedStack.Screen name="Feed" component={Feed} />
      <FeedStack.Screen name="Feedback" component={Feedback} />
    </FeedStack.Navigator>
  );
};

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: "#e91e63",
        showLabel: false,
      }}
    >
      <HomeStack.Screen
        name="Feed"
        component={Feed}
        options={{
          // tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <HomeStack.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="ios-add-circle"
              size={70}
              color="#E9446A"
              style={{
                position: "absolute",
                top: -20,
                shadowColor: "#E9446A",
                shadowOffset: { width: 0, height: 10 },
                shadowRadius: 10,
                shadowOpacity: 0.3,
              }}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="ChatBot"
        component={Chatbot}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-chatboxes" size={24} color={color} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
