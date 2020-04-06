import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

export default class AddCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.question}>
          <TextInput placeholder="Question" style={styles.text} />
          <TextInput placeholder="Answer" style={styles.text} />
        </View>

        <TouchableOpacity>
          <View>
            <Text style={styles.submit}>Start Quiz</Text>
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

  text: {
    fontSize: 25,
    borderWidth: 2,
    marginHorizontal: 7,
    marginVertical: 10,
    width: 400,
    borderRadius: 8,
    padding: 5,
  },
  question: {
    padding: 5,
    marginTop: 2,
  },

  submit: {
    marginTop: 20,
    fontSize: 25,
    textAlign: "center",
    padding: 5,
    width: 250,
    color: "white",
    backgroundColor: "darkblue",
    borderRadius: 10,
    paddingVertical: 10,
  },
});
