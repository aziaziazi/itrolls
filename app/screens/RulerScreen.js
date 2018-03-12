import React from 'react';
import styled from "styled-components";
import {Button, Text, View, TouchableHighlight} from 'react-native';
import { Dimensions } from 'react-native'
import RNSensors from "react-native-sensors";

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  background-color: steelblue;
`;

const ButtonWrapper = styled.TouchableHighlight`
  width: 50;
  height: 50;
  border-radius: 50px;
  margin: 50px;
  background-color: powderblue;
`;

const ViewContainer = styled.View`
  flex: 1
  justify-content: center;
`;

class RulerScreen extends React.Component {
  render() {
      const {width, height} = Dimensions.get('window');

      return (
      <Wrapper>
        <ViewContainer>
            <Text>width => {width}</Text>
            <Text>height => {height}</Text>
        </ViewContainer>
        <ButtonWrapper
          onPress={() => this.props.navigation.goBack()}
          color='cadetblue'
        >
          <View />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

export default RNSensors.decorator({
    Accelerometer: true,
    Gyroscope: true,
    Magnetometer: true,
})(RulerScreen);