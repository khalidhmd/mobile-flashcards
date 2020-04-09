import { AsyncStorage } from "react-native";

const appKey = "FLASH_CARD_DECKS";
const decks = {
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
};

export const getDecks = async () => {
  try {
    const value = await AsyncStorage.getItem(appKey);

    if (value !== null) {
      return JSON.parse(value);
    } else {
      await AsyncStorage.setItem(appKey, JSON.stringify(decks));
      console.log(decks);
      return decks;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getDeck = async (title) => {
  try {
    const value = await AsyncStorage.getItem(appKey);
    if (value !== null) {
      const deck = JSON.parse(value)[title];

      return deck;
    }
  } catch (e) {
    console.log(e);
  }
};

export const addQuestion = async (title, question) => {
  try {
    console.log("runs");
    const value = await AsyncStorage.getItem(appKey);
    if (value !== null) {
      const decks = JSON.parse(value);
      decks[title]["questions"].push(question);
      await AsyncStorage.setItem(appKey, JSON.stringify(decks));
    }
  } catch (e) {
    console.log(e);
  }
};

export const createDeck = async (title) => {
  try {
    const value = await AsyncStorage.getItem(appKey);
    if (value !== null) {
      const decks = JSON.parse(value);
      decks[title] = { title, questions: [] };
      await AsyncStorage.setItem(appKey, JSON.stringify(decks));
    }
  } catch (e) {
    console.log(e);
  }
};

export const deleteDeck = async (title) => {
  try {
    const value = await AsyncStorage.getItem(appKey);

    if (value !== null) {
      const decks = JSON.parse(value);
      decks[title] = undefined;
      delete decks[title];

      await AsyncStorage.setItem(appKey, JSON.stringify(decks));
    }
  } catch (e) {
    console.log(e);
  }
};
