import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import Router from "./components/Router";

import Theme from "./components/Theme";

export default () => (
  <ThemeProvider theme={Theme}>
    <Router />
  </ThemeProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
