import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeckList from "./Components/DeckList";
import CreateDeck from "./Components/CreateDeck";

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  state = {
    data: {
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
        <Tab.Navigator>
          <Tab.Screen name="Decks" component={DeckList} />
          <Tab.Screen name="NewDeck" component={CreateDeck} />
        </Tab.Navigator>
      </NavigationContainer>
    );
    //   return (
    //     <NavigationContainer>
    //       <View style={{ marginTop: 20, flex: 1 }}>
    //         <AddCard />
    //       </View>
    //     </NavigationContainer>
    //   );
  }
}
