import React from 'react';
import {StackNavigator} from "react-navigation";

import HomeScreen from "./app/screens/HomeScreen";
import RulerScreen from "./app/screens/RulerScreen";

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Ruler: {
      screen: RulerScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}