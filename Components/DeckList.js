import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import DeckItem from "./DeckItem";

export default class DeckList extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>All Decks</Text>
        <DeckItem />
        <DeckItem />
        <DeckItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: "white",
    backgroundColor: "blue",
    alignSelf: "stretch",
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
  },
});
