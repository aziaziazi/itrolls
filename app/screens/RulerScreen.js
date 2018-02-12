import React from 'react';
import {Button, Text, View, TouchableHighlight} from 'react-native';
import styled from "styled-components";

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
`;

export default class RulerScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <ViewContainer>
          <Text>lala</Text>
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