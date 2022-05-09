import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useGame } from "../../context/GameContext";
import {
  RESET_QUIZ,
  SET_CURRENT_QUESTION_INDEX,
  SET_SELECTED_OPTIONS,
} from "../../reducers/actions";
import "./Questions.css";

export const Questions = () => {
  const {
    state: { quizTitle, questions, currentQuestionIndex },
    dispatch,
  } = useGame();

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSelectedOptionIndex(-1);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (location.pathname === "/question") {
      dispatch({ type: RESET_QUIZ });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextBtnHandler = () => {
    dispatch({
      type: SET_SELECTED_OPTIONS,
      payload: {
        selectedOptions: selectedOptionIndex,
      },
    });
    dispatch({
      type: SET_CURRENT_QUESTION_INDEX,
      payload: { currentQuestionIndex: currentQuestionIndex + 1 },
    });
    setSelectedOptionIndex(-1);
  };

  const submitBtnHandler = () => {
    dispatch({
      type: SET_SELECTED_OPTIONS,
      payload: {
        selectedOptions: selectedOptionIndex,
      },
    });
    setSelectedOptionIndex(-1);
    navigate("/result");
  };

  const optionBtnHandler = (optionId: number) => {
    setSelectedOptionIndex(optionId);
  };

  return (
    <>
      {questions.length === 0 ? (
        <Navigate replace to="/" />
      ) : (
        <main className="main-wrapper">
          <section className="questions-section-wrapper container">
            <div className="questions-card-container">
              <div className="card card-shadow questions-card">
                <div className="card-body">
                  <h2 className="card-title">{quizTitle}</h2>
                  <div className="top-display">
                    <div className="count">
                      <span className="text">Question:</span>
                      <span className="number">
                        {" "}
                        {`${currentQuestionIndex + 1}/${questions.length}`}
                      </span>
                    </div>
                  </div>
                  <div className="question-container">
                    <p className="question">
                      {questions[currentQuestionIndex].question}
                    </p>
                  </div>
                  <div className="option-container">
                    {questions[currentQuestionIndex].options.map(
                      (option: any, id: any) => {
                        return (
                          <button
                            className={`btn btn-option ${
                              selectedOptionIndex === id ? "selected" : ""
                            }`}
                            key={id}
                            onClick={() => optionBtnHandler(id)}
                          >
                            {option.value}
                          </button>
                        );
                      }
                    )}
                  </div>
                  <div className="card-button">
                    {currentQuestionIndex === questions.length - 1 ? (
                      <button
                        className={`btn btn-start-quiz ${
                          selectedOptionIndex === -1 ? "btn-disabled" : ""
                        }`}
                        onClick={submitBtnHandler}
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        className={`btn btn-start-quiz ${
                          selectedOptionIndex === -1 ? "btn-disabled" : ""
                        }`}
                        onClick={nextBtnHandler}
                      >
                        Next
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};
