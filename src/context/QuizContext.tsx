import { DocumentData } from "@firebase/firestore";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { quizDataReducer } from "../reducers";
import {
  QUIZ_DATA_ERROR,
  QUIZ_DATA_LOADING,
  SAVE_QUIZ_DATA,
} from "../reducers/actions";
import { getQuizDataService } from "../services";
import { QuizContextType } from "../types/quizData.types";

const initialState = {
  loading: false,
  quizData: [],
  error: "",
};

const QuizContext = createContext<QuizContextType>({} as QuizContextType);

const QuizDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(quizDataReducer, initialState);

  useEffect(() => {
    dispatch({ type: QUIZ_DATA_LOADING });
    (async () => {
      try {
        const res = await getQuizDataService();
        const quiz: DocumentData | undefined = res.docs.map(ele => {
          return { ...ele.data(), id: ele.id };
        });
        dispatch({ type: SAVE_QUIZ_DATA, payload: { quizData: quiz } });
      } catch (error: any) {
        const msg = error.message
          .match(/\/(\S+)[)]./i)[1]
          .replace(/-/g, " ")
          .toUpperCase();
        dispatch({ type: QUIZ_DATA_ERROR, payload: { error: msg } });
      }
    })();
  }, []);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuizData = () => useContext(QuizContext);

export { QuizDataProvider, useQuizData };
