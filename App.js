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
            id: 0,
            question: "What is React?",
            answer: "A library for managing user interfaces",
          },
          {
            id: 1,
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event",
          },
        ],
      },
      JavaScript: {
        title: "JavaScript",
        questions: [
          {
            id: 0,
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared.",
          },
        ],
      },
    },
  };
  componentDidMount() {}
  getDecks = () => {
    return { ...this.state.decks };
  };

  getDeck = (title) => {
    return { ...this.state.decks[title] };
  };

  addQuestion = (title, question) => {
    this.setState((state) => {
      const deck = { ...state[title] };
      deck[questions].push(question);
      state[title] = undefined;
      delete state[title];
      return { ...state, [title]: deck };
    });
  };

  createDeck = (deck) => {
    this.setState((state) => {
      return Object.assign(state, { [deck.title]: deck });
    });
  };

  render() {
    const { getDeck, getDecks, addQuestion, createDeck } = this;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Decks"
            component={HomeTab}
            initialParams={{ getDeck, getDecks, addQuestion, createDeck }}
          />
          <Stack.Screen name="NewCard" component={AddCard} />
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
