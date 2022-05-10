import { getDocs, quizRef } from "../../firebase/firebase.config";

export const getQuizDataService = async () => {
  return await getDocs(quizRef);
};
