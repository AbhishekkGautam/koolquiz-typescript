import React from "react";
import { useNavigate } from "react-router-dom";
import { ResultQuesCard } from "../../components";
import { useGame } from "../../context/GameContext";
import "./Result.css";

export const Result = () => {
  const {
    state: { quizTitle, questions, selectedOptions },
  } = useGame();

  const navigate = useNavigate();

  const correctOptions = questions.map((question: any, index: any) =>
    question.options.reduce((acc: any, curr: any, id: any) => {
      if (curr.isRight) {
        acc = id;
      }
      return acc;
    }, 0)
  );

  const scoreCount = selectedOptions.reduce(
    (acc, curr, index) => (curr === correctOptions[index] ? acc + 10 : acc - 5),
    0
  );

  return (
    <main className="main-wrapper">
      <section className="result-section-wrapper container">
        <div className="result-container">
          <div className="header">
            <h2 className="header-title">{quizTitle}</h2>
            <p className="final-score">{`Final Score: ${scoreCount}/50`}</p>
          </div>
          {questions?.map((question: any, index: any) => {
            return (
              <div className="" key={index}>
                <ResultQuesCard
                  question={question}
                  selectedOptions={selectedOptions}
                  questionIndex={index}
                />
              </div>
            );
          })}
          <div className="back-button">
            <button className="btn btn-back-home" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
