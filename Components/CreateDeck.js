import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

const Stack = createStackNavigator();

export default class CreateDeck extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="NewDeck" component={CreateDeckView} />
      </Stack.Navigator>
    );
  }
}

class CreateDeckView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>

        <TextInput style={styles.text} />

        <TouchableOpacity>
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
