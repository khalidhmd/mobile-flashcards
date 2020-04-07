import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class DeckList extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Deck")}>
          <View style={styles.deck}>
            <Text style={styles.title}>Deck title</Text>
            <Text style={styles.text}>3 cards</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Deck")}>
          <View style={styles.deck}>
            <Text style={styles.title}>Deck title</Text>
            <Text style={styles.text}>4 cards</Text>
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
