import { QuizDataActionType, QuizStateType } from "../types/quizData.types";
import { QUIZ_DATA_LOADING, SAVE_QUIZ_DATA, QUIZ_DATA_ERROR } from "./actions";

export const quizDataReducer = (
  state: QuizStateType,
  action: QuizDataActionType
) => {
  switch (action.type) {
    case QUIZ_DATA_LOADING:
      return { ...state, loading: true, error: "" };
    case SAVE_QUIZ_DATA:
      return { ...state, loading: false, quizData: action.payload.quizData };
    case QUIZ_DATA_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
