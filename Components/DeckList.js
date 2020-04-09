import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

import { getDecks } from "../api/helpers";

export default class DeckList extends React.Component {
  state = {
    decks: {},
    position: new Animated.Value(0),
  };
  handlePress = (deck) => {
    const { position } = this.state;

    const { navigation } = this.props;
    Animated.timing(position, { toValue: -400, duration: 300 }).start();
    navigation.navigate("Deck", { deck });
  };

  loadDecks = async () => {
    const decks = await getDecks();

    this.setState({ decks });
  };
  async componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("focus", () => {
      const { position } = this.state;
      this.loadDecks();
      Animated.timing(position, { toValue: 0, duration: 100 }).start();
    });
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
    const { position } = this.state;
    return (
      <View>
        <FlatList
          data={deckArray}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => this.handlePress(item)}>
                <Animated.View style={[styles.deck, { left: position }]}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.text}>{item.questions.length} cards</Text>
                </Animated.View>
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
