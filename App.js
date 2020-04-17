import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTab from "./Components/HomeTab";
import AddCard from "./Components/AddCard";
import Deck from "./Components/Deck";
import Quiz from "./Components/Quiz";
import { setLocalNotification, listenForNotifications } from "./api/helpers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

const Stack = createStackNavigator();

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
    listenForNotifications();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Decks" component={HomeTab} />
            <Stack.Screen name="NewCard" component={AddCard} />
            <Stack.Screen name="Deck" component={Deck} />
            <Stack.Screen name="Quiz" component={Quiz} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
