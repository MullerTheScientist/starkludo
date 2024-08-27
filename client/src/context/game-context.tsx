import { createContext } from "react";
import { OptionsProps } from "../types";

export const GameContext = createContext<{
  gameState: { [key: string]: string };
  setGameData: (game: { [key: string]: string }) => void;
  options: OptionsProps;
  setGameOptions: (newOption: {}) => void;
}>({
  gameState: {},
  setGameData: (game) => {},
  options: {
    gameIsOngoing: false,
    playersLength: 0,
    diceFace: 0,
    chance: 0,
    hasThrownDice: false,
    winners: [],
    gameCondition: [],
  },
  setGameOptions: (newOption) => {},
});
