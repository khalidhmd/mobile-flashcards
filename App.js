import React from "react";
import { Text, View } from "react-native";
import DeckList from "./Components/DeckList";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <DeckList />
      </View>
    );
  }
}
