import React from "react";
import { TouchableOpacity } from "react-native";

const CircleButton = () => (
  <TouchableOpacity
    style={{
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      backgroundColor: "#fff",
      borderRadius: 100
    }}
  />
);

export default CircleButton;
