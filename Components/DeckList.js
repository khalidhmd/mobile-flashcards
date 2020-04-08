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
  handlePress = (item) => {
    const { navigation } = this.props;
    navigation.navigate("Deck", { deck: item });
  };
  Item = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.handlePress(item)}>
        <View style={styles.deck}>
          <Text style={styles.title}>{item.key}</Text>
          <Text style={styles.text}>{item.cards} cards</Text>
        </View>
      </TouchableOpacity>
    );
  };
  loadDecks = async () => {
    const decks = await getDecks();
    this.setState({ decks });
  };
  async componentDidMount() {
    this.loadDecks();
  }
  render() {
    const deckKeys = Object.keys(this.state.decks);
    const deckArray = deckKeys.map((title) => {
      return {
        key: title,
        cards: this.state.decks[title][`questions`].length,
      };
    });

    return <FlatList data={deckArray} renderItem={this.Item} />;
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
