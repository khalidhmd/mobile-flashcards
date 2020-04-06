import React from "react";
import { Text, View } from "react-native";
import Deck from "./Components/Deck";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 20, flex: 1 }}>
        <Deck />
      </View>
    );
  }
}
