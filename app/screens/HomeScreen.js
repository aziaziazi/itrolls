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
  
`;

const StyledButton = styled.Button`
  
`;

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <StyledText>Yeah itRolls is almost ready to roll 🤸‍</StyledText>
        <StyledButton
          onPress={() => this.props.navigation.navigate('Ruler')}
          title="Start"
          color="sandybrown"
        />
      </Container>
    );
  }
}