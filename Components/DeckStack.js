import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "./DeckList";
import AddCard from "./AddCard";
import Deck from "./Deck";
import Quiz from "./Quiz";

const Stack = createStackNavigator();

export default class DeckStack extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Decks" component={DeckList} />
        <Stack.Screen name="NewCard" component={AddCard} />
        <Stack.Screen name="Deck" component={Deck} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    );
  }
}
