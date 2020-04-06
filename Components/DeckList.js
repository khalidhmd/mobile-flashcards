import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import DeckItem from "./DeckItem";

export default class DeckList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckItem />
        <DeckItem />
        <DeckItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#f1f1f1" },
  flex: 1,
});
