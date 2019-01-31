import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Transition, animated } from "react-spring";
import styled from "styled-components";

import HeadlineText from "./HeadlineText";
import CircleButton from "./CircleButton";
const Container = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 8;
`;
const SideButtons = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  justify-content: space-between;
`;

const AnimatedView = animated(View);

class SettingsScreen extends React.Component {
  state = { toggle: true };
  toggle = e => this.setState(state => ({ toggle: !state.toggle }));
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.toggle}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000"
          }}
        >
          <Transition
            native={true}
            items={this.state.toggle}
            from={{ position: "absolute", opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {toggle =>
              toggle
                ? props => (
                    <AnimatedView style={props}>
                      <HeadlineText
                        style={{
                          textShadowOffset: { width: 1, height: 1 },
                          textShadowRadius: 5,
                          textShadowColor: "rgba(0, 0, 0, 0.8)"
                        }}
                      >
                        {"Pigs-in-a-Blanket with Sauerkraut and Mustard".toUpperCase()}
                      </HeadlineText>
                    </AnimatedView>
                  )
                : props => (
                    <AnimatedView style={props}>
                      <SideButtons>
                        <CircleButton>2</CircleButton>
                        <CircleButton>2</CircleButton>
                        <CircleButton>2</CircleButton>
                      </SideButtons>
                    </AnimatedView>
                  )
            }
          </Transition>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default SettingsScreen;
