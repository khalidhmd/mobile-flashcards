import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTab from "./Components/HomeTab";
import AddCard from "./Components/AddCard";
import Deck from "./Components/Deck";
import Quiz from "./Components/Quiz";

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    decks: {
      React: {
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces",
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event",
          },
        ],
      },
      JavaScript: {
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared.",
          },
        ],
      },
    },
  };
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Decks" component={HomeTab} />
          <Stack.Screen name="NewCard" component={AddCard} />
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
