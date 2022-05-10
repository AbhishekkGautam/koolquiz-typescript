import React from "react";
import "../../pages/Result/Result.css";

type Props = {
  question: any;
  selectedOptions: number[];
  questionIndex: number;
};

export const ResultQuesCard = ({
  question,
  selectedOptions,
  questionIndex,
}: Props) => {
  return (
    <div className="">
      <div className="questions-card-container">
        <div className="card card-shadow questions-card">
          <div className="card-body">
            <div className="question-container">
              <p className="question">{question.question}</p>
            </div>
            <div className="option-container">
              {question.options.map((option: any, index: any) => {
                return (
                  <button
                    key={index}
                    className={`btn btn-option ${
                      option.isRight
                        ? "correct-answer"
                        : selectedOptions[questionIndex] === index &&
                          !option.isRight
                        ? "wrong-answer"
                        : ""
                    }`}
                  >
                    {option.value}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
