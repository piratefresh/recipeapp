import React from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import styled from "styled-components/native";
import { Transition, animated } from "react-spring";

import HeadlineText from "./HeadlineText";
import DetailText from "./DetailText";
import CircleButton from "./CircleButton";

const AnimatedView = animated(View);

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 8;
`;
const CardImage = styled.Image`
  border-radius: 8;
  padding: 20px;
`;
const Overlay = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
`;
const HeadlineView = styled.View`
  position: absolute;
  left: 0;
  top: 10%;
  padding: 10%;
`;
const SideButtons = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  justify-content: space-between;
`;

class Card extends React.Component {
  state = { toggle: true };
  toggle = e => this.setState(state => ({ toggle: !state.toggle }));
  render() {
    const fullWidth = Dimensions.get("window").width;
    const fullHeight = Dimensions.get("window").height;
    return (
      <TouchableWithoutFeedback onPress={this.toggle}>
        <Container
          style={{
            width: fullWidth,
            height: fullHeight
          }}
        >
          <CardImage
            style={{
              width: fullWidth,
              height: fullHeight,
              resizeMode: "cover"
            }}
            source={{
              uri:
                "https://assets.epicurious.com/photos/5c17d4b06c844511339f43e7/6:4/w_1080%2Ch_720/Small-Plates-New-Years-Pigs-in-a-blanket-12122018.jpg"
            }}
          />
          <Overlay style={{ width: fullWidth, height: fullHeight }} />
          <HeadlineView>
            <Transition
              native={true}
              unique
              items={this.state.toggle}
              from={{ opacity: 0, height: 0, width: 0 }}
              enter={{ opacity: 1, height: 100, width: "auto" }}
              leave={{ opacity: 0, height: 0, width: 0 }}
            >
              {toggle =>
                toggle
                  ? props => (
                      <AnimatedView style={props}>
                        <HeadlineText>
                          {"Pigs-in-a-Blanket with Sauerkraut and Mustard".toUpperCase()}
                        </HeadlineText>
                      </AnimatedView>
                    )
                  : props => (
                      <AnimatedView style={props}>
                        <SideButtons style={{ height: fullHeight / 4 }}>
                          <CircleButton>2</CircleButton>
                          <CircleButton>2</CircleButton>
                          <CircleButton>2</CircleButton>
                        </SideButtons>
                      </AnimatedView>
                    )
              }
            </Transition>
          </HeadlineView>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

export default Card;
