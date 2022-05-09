import { GameActionType, GameStateType } from "../types/gameContext.types";
import {
  GAME_ERROR,
  GAME_LOADING,
  SAVE_QUESTIONS,
  SET_CURRENT_QUESTION_INDEX,
  SET_SELECTED_OPTIONS,
  RESET_QUIZ,
} from "./actions";

export const gameReducer = (state: GameStateType, action: GameActionType) => {
  switch (action.type) {
    case GAME_LOADING:
      return { ...state, loading: true, error: "" };
    case SAVE_QUESTIONS:
      return {
        ...state,
        loading: false,
        quizTitle: action.payload.quizTitle,
        questions: action.payload.questions,
      };
    case SET_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: action.payload.currentQuestionIndex,
      };
    case SET_SELECTED_OPTIONS:
      return {
        ...state,
        selectedOptions: [
          ...state.selectedOptions,
          action.payload.selectedOptions,
        ],
      };
    case GAME_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    case RESET_QUIZ:
      return { ...state, currentQuestionIndex: 0, selectedOptions: [] };
    default:
      return state;
  }
};
