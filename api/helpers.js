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
    if (value !== null && value !== "") {
      return JSON.parse(value);
    } else return decks;
  } catch (e) {
    console.log(e);
  }
};

export const getDeck = async (title) => {
  try {
    const value = await AsyncStorage.getItem(appKey);
    if (value !== null && value !== "") {
      return JSON.parse(value)[title];
    }
  } catch (e) {
    console.log(e);
  }
};

export const addQuestion = async (title, question) => {
  try {
    const value = await AsyncStorage.getItem(appKey);
    if (value !== null && value !== "") {
      const decks = JSON.parse(value);
      decks[title][questions].push(question);
      await AsyncStorage.setItem(appKey, JSON.stringify(decks));
    }
  } catch (e) {
    console.log(e);
  }
};

export const createDeck = async (title) => {
  try {
    const value = await AsyncStorage.getItem(appKey);
    if (value !== null && value !== "") {
      const decks = JSON.parse(value);
      decks[title] = { title, questions: [] };
      await AsyncStorage.setItem(appKey, JSON.stringify(decks));
    }
  } catch (e) {
    console.log(e);
  }
};
