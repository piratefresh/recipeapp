import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

import Card from "./Card";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #e4e6e9;
`;

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Card />
      </Container>
    );
  }
}

export default HomeScreen;
