import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default class Quiz extends React.Component {
  state = { question: false };
  render() {
    const { question } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {question ? "The question" : "The answer"}
        </Text>
        <TouchableOpacity>
          <View>
            <Text style={styles.flip}>{question ? "Answer" : "Question"}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.correct}>Correct</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.incorrect}>Incorrect</Text>
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
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    alignSelf: "stretch",
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
  },

  correct: {
    marginTop: 20,
    fontSize: 30,
    textAlign: "center",
    padding: 5,
    width: 250,
    color: "#f1f1f1",
    backgroundColor: "darkgreen",
    borderRadius: 10,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  incorrect: {
    marginTop: 20,
    fontSize: 30,
    textAlign: "center",
    padding: 5,
    width: 250,
    color: "#f1f1f1",
    backgroundColor: "darkred",
    borderRadius: 10,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  flip: {
    marginTop: 20,
    fontSize: 25,
    textAlign: "center",
    padding: 20,
    color: "darkred",
    borderRadius: 10,
    paddingVertical: 10,
    fontWeight: "bold",
  },
});
