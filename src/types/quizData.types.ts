import { DocumentData } from "firebase/firestore";

// type Options = {
// 	value: string | number,
// 	isRight: boolean
// }

// type Questions = {
// 	question: string
// 	options: Options[]
// }

type QuizCardType = {
  id: string;
  title: string;
  description: string;
  categoryName: string;
  bannerImage: string;
};

type QuizStateType = {
  quizData: DocumentData;
  loading: boolean;
  error: string;
};

type QuizDataLoadingAction = {
  type: "QUIZ_DATA_LOADING";
};

type SaveQuizDataAction = {
  type: "SAVE_QUIZ_DATA";
  payload: {
    quizData: DocumentData;
  };
};

type QuizDataErrorAction = {
  type: "QUIZ_DATA_ERROR";
  payload: {
    error: string;
  };
};

type QuizDataActionType =
  | QuizDataLoadingAction
  | SaveQuizDataAction
  | QuizDataErrorAction;

type QuizContextType = {
  state: QuizStateType;
  dispatch: React.Dispatch<QuizDataActionType>;
};

export type {
  QuizStateType,
  QuizContextType,
  QuizDataActionType,
  QuizCardType,
};
