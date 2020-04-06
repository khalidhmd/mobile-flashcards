import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default class DeckItem extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.deck}>
          <Text style={styles.title}>Deck title</Text>
          <Text style={styles.text}>3 cards</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    alignSelf: "stretch",
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 25,
    alignSelf: "stretch",
    textAlign: "center",
  },
  deck: {
    padding: 5,
    marginTop: 2,
    backgroundColor: "lightgray",
  },
});
