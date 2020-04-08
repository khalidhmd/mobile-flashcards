import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeckList from "./DeckList";
import CreateDeck from "./CreateDeck";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

export default class HomeTab extends React.Component {
  render() {
    const { getDecks } = this.props.route.params;
    return (
      <View style={{ flex: 1 }}>
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
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color,
                    }}
                  >
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
          <Tab.Screen
            name="Decks"
            component={DeckList}
            initialParams={{ getDecks }}
          />
          <Tab.Screen name="NewDeck" component={CreateDeck} />
        </Tab.Navigator>
      </View>
    );
  }
}
