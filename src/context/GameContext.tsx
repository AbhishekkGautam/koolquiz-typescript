import React, { createContext, useContext, useReducer } from "react";
import { gameReducer } from "../reducers";
import { GameContextType } from "../types/gameContext.types";

const initialState = {
  loading: false,
  quizTitle: "",
  questions: [],
  currentQuestionIndex: 0,
  selectedOptions: [],
  error: "",
};

const GameContext = createContext({} as GameContextType);

const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

const useGame = () => useContext(GameContext);

export { GameProvider, useGame };
