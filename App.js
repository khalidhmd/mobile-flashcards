import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTab from "./Components/HomeTab";
import AddCard from "./Components/AddCard";
import Deck from "./Components/Deck";
import Quiz from "./Components/Quiz";
import { setLocalNotification, listenForNotifications } from "./api/helpers";
import { Text, View } from "react-native";

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    initialized: false,
  };

  componentDidMount() {
    setLocalNotification();
    listenForNotifications();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Decks" component={HomeTab} />
          <Stack.Screen name="NewCard" component={AddCard} />
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
