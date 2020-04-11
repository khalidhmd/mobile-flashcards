import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { addQuestion } from "../api/helpers";

export default class AddCard extends React.Component {
  state = {
    question: "",
    answer: "",
  };
  saveCard = async () => {
    const { navigation } = this.props;
    const { deck } = this.props.route.params;
    if (this.state.answer === "" || this.state.question === "") {
      alert(`Question and Answer can't be empty`);
      return;
    }

    try {
      await addQuestion(deck.title, {
        question: this.state.question,
        answer: this.state.answer,
      });
    } catch (error) {
      console.log(error);
    }

    navigation.navigate("Deck");
  };
  render() {
    const { deck } = this.props.route.params;

    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.title}>Add a question to {deck.title}</Text>
        </View>
        <View style={styles.question}>
          <TextInput
            placeholder="Question"
            style={styles.text}
            value={this.state.question}
            onChangeText={(text) => this.setState({ question: text })}
          />
          <TextInput
            placeholder="Answer"
            style={styles.text}
            value={this.state.answer}
            onChangeText={(text) => this.setState({ answer: text })}
          />
        </View>

        <TouchableOpacity onPress={this.saveCard}>
          <View>
            <Text style={styles.submit}>Submit</Text>
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
  title: {
    fontSize: 30,
    alignSelf: "stretch",
    textAlign: "center",
    fontWeight: "bold",
  },
  deck: {
    padding: 5,
    marginTop: 2,
  },
});
