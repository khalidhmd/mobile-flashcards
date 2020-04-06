import React from "react";
import { Text, View } from "react-native";

import AddCard from "./Components/AddCard";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 20, flex: 1 }}>
        <AddCard />
      </View>
    );
  }
}
