import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { deleteDeck, getDeck } from "../api/helpers";

export default class DeckItem extends React.Component {
  state = {
    deck: { tite: "", questions: [] },
  };
  addCard = (deck) => {
    const { navigation } = this.props;
    navigation.navigate("NewCard", { deck });
  };

  startQuiz = (deck) => {
    const { navigation } = this.props;
    if (deck.questions.length < 1) {
      alert(`You can't take quiz on empty deck`);
      return;
    }
    navigation.navigate("Quiz", { deck });
  };

  handleDelete = async (title) => {
    await deleteDeck(title);

    const { navigation } = this.props;
    navigation.pop();
    navigation.navigate("Decks");
  };
  componentDidMount() {
    const { navigation } = this.props;
    const { deck } = this.props.route.params;

    this.setState({ deck });
    navigation.addListener("focus", async () => {
      const freshDeck = await getDeck(deck.title);
      this.setState({ deck: freshDeck });
    });
  }
  render() {
    const { deck } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.text}>{deck.questions.length} cards</Text>
        </View>

        <TouchableOpacity onPress={() => this.addCard(deck)}>
          <View>
            <Text style={styles.addCard}>Add Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.startQuiz(deck)}>
          <View>
            <Text style={styles.start}>Start Quiz</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleDelete(deck.title)}>
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
