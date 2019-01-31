import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
//Pages
import HomeScreen from "./Home";
import SettingsScreen from "./Settings";

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen
  },
  {
    tabBarOptions: {
      activeTintColor: "#7444C0",
      inactiveTintColor: "#363636",
      labelStyle: {
        fontSize: 14,
        textTransform: "uppercase",
        padding: 15
      },
      style: {
        color: "#fff",
        backgroundColor: "#FFF", // TabBar background
        borderTopWidth: 0,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 0, width: 0 }
      }
    }
  }
);

export default createAppContainer(TabNavigator);
