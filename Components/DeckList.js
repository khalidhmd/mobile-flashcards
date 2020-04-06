import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import DeckItem from "./DeckItem";

export default class DeckList extends React.Component {
  render() {
    return (
      <View>
        <DeckItem />
        <DeckItem />
        <DeckItem />
      </View>
    );
  }
}
