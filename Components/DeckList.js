import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { getDecks } from "../api/helpers";

export default class DeckList extends React.Component {
  state = {
    decks: {},
  };
  handlePress = (deck) => {
    const { navigation } = this.props;

    navigation.navigate("Deck", { deck });
  };

  loadDecks = async () => {
    const decks = await getDecks();

    this.setState({ decks });
  };
  async componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("focus", () => this.loadDecks());
    this.loadDecks();
  }
  render() {
    const deckKeys = Object.keys(this.state.decks);
    const deckArray = deckKeys.map((title) => {
      return {
        title,
        questions: this.state.decks[title][`questions`],
      };
    });

    return (
      <View>
        <FlatList
          data={deckArray}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => this.handlePress(item)}>
                <View style={styles.deck}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.text}>{item.questions.length} cards</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.title}
        />
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
    alignSelf: "stretch",
    textAlign: "center",
  },
  deck: {
    padding: 5,
    marginTop: 2,
    backgroundColor: "lightgray",
    marginHorizontal: 5,
    borderRadius: 5,
  },
});
