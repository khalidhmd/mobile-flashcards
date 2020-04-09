import React from "react";
import { createDeck } from "../api/helpers";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

export default class CreateDeckView extends React.Component {
  state = {
    title: "",
  };
  handlePress = async () => {
    const { navigation } = this.props;
    await createDeck(this.state.title);
    this.setState({ title: "" });
    navigation.navigate("Decks");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>

        <TextInput
          style={styles.text}
          value={this.state.title}
          onChangeText={(text) => this.setState({ title: text })}
        />

        <TouchableOpacity onPress={this.handlePress}>
          <View>
            <Text style={styles.submit}>Create Deck</Text>
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
  text: {
    fontSize: 25,
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 10,
    width: "90%",
    borderRadius: 8,
    padding: 5,
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
