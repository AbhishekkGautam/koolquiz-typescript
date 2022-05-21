import React from "react";
import { Link } from "react-router-dom";
import { useGame } from "../../context/GameContext";
import "./Rules.css";

export const Rules = () => {
  const {
    state: { quizTitle },
  } = useGame();

  return (
    <main className="main-wrapper">
      <section className="rules-section-wrapper container">
        <div className="rules-card-container">
          <div className="card card-shadow rules-card">
            <div className="card-body">
              <h2 className="card-title">{quizTitle}</h2>
              <div className="rules">
                <span className="material-icons-outlined">info</span>
                <p>The quiz contains a total of 5 questions.</p>
              </div>
              <div className="rules">
                <span className="material-icons-outlined">info</span>
                <p>
                  10 marks for every CORRECT ANSWER and 5 negative marks for
                  WRONG ANSWER.
                </p>
              </div>
              <div className="rules">
                <span className="material-icons-outlined">info</span>
                <p>NO SKIP option.</p>
              </div>
              <div className="card-button">
                <Link className="btn btn-start-quiz" to="/question">
                  Start Quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
