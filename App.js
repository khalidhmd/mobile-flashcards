import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeckStack from "./Components/DeckStack";
import CreateDeck from "./Components/CreateDeck";
import { FontAwesome } from "@expo/vector-icons";

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
        <View style={{ marginTop: 20, flex: 1 }}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName, text;

                if (route.name === "Decks") {
                  iconName = focused ? "list-alt" : "list-alt";
                  text = "Decks";
                } else if (route.name === "NewDeck") {
                  iconName = focused ? "plus" : "plus";
                  text = "Add Deck";
                }

                // You can return any component that you like here!
                return (
                  <View style={{ alignItems: "center" }}>
                    <FontAwesome name={iconName} size={size} color={color} />
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      {text}
                    </Text>
                  </View>
                );
              },
            })}
            tabBarOptions={{
              activeTintColor: "red",
              inactiveTintColor: "gray",
              activeBackgroundColor: "lightblue",
              showLabel: false,
            }}
          >
            <Tab.Screen name="Decks" component={DeckStack} />
            <Tab.Screen name="NewDeck" component={CreateDeck} />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    );
  }
}
