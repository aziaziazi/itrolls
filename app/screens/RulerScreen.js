import React from 'react';
import {Button, Text, View} from 'react-native';
import styled from "styled-components";

const Container = styled.View`
  background-color: snow;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  margin: 20px;
`;

const StyledButton = styled.Button`
  margin: 20px;
`;

export default class RulerScreen extends React.Component {
  render() {
    return (
      <Container>
        <StyledButton
          onPress={() => this.props.navigation.goBack()}
          title="Back home"
          color='cadetblue'
        />
      </Container>
    );
  }
}