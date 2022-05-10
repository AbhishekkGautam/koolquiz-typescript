import React from "react";
import { useNavigate } from "react-router-dom";
import "./QuizCard.css";
import { QuizCardType } from "../../types/quizData.types";
import { useGame } from "../../context/GameContext";
import { useQuizData } from "../../context/QuizContext";
import { SAVE_QUESTIONS } from "../../reducers/actions";

export const QuizCard = (props: QuizCardType) => {
  const { id, title, description, categoryName, bannerImage } = props;

  const {
    state: { quizData },
  } = useQuizData();
  const { dispatch } = useGame();
  const navigate = useNavigate();

  const playQuizHandler = () => {
    const quiz = quizData.find((quiz: any) => quiz.id === id);
    dispatch({
      type: SAVE_QUESTIONS,
      payload: { quizTitle: quiz.title, questions: quiz.questions },
    });
    navigate("/rules");
  };

  return (
    <div className="card quiz-card card-shadow">
      <div className="card-header">
        <img className="img-responsive" src={bannerImage} alt="Indian flag" />
      </div>
      <div className="card-body">
        <div className="text-badge">{categoryName}</div>
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description}</p>
        <button onClick={playQuizHandler} className="btn btn-play">
          Play
        </button>
      </div>
    </div>
  );
};
