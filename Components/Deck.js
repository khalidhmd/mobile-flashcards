import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default class DeckItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.title}>Deck title</Text>
          <Text style={styles.text}>3 cards</Text>
        </View>

        <TouchableOpacity>
          <View>
            <Text style={styles.addCard}>Add Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.start}>Start Quiz</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.delete}>Delete Deck</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  title: {
    fontSize: 30,
    alignSelf: "stretch",
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 25,
    paddingTop: 5,
    alignSelf: "stretch",
    textAlign: "center",
  },
  deck: {
    padding: 5,
    marginTop: 2,
  },
  addCard: {
    marginTop: 75,
    fontSize: 25,
    alignSelf: "center",
    textAlign: "center",
    padding: 5,
    width: 250,
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 10,
  },
  start: {
    marginTop: 20,
    fontSize: 25,
    alignSelf: "center",
    textAlign: "center",
    padding: 5,
    width: 250,
    color: "white",
    backgroundColor: "darkblue",
    borderRadius: 10,
    paddingVertical: 10,
  },
  delete: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: "center",
    textAlign: "center",
    padding: 5,
    width: 250,
    color: "red",
    borderRadius: 10,
  },
});
