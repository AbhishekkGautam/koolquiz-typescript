import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { QuizCard } from "../../components/QuizCard/QuizCard";
import { useQuizData } from "../../context/QuizContext";
import "./Home.css";

export const Home = () => {
  const {
    state: { loading, error, quizData },
  } = useQuizData();

  return (
    <main className="main-wrapper">
      <section className="home-section-wrapper container">
        <h2 className="text-left category-title font-weight-500">
          Popular Categories
        </h2>
        <div className="featured-categories-container">
          {loading ? (
            <div className="loader">
              <ThreeDots color="#c4a6e3" height={120} width={120} />
            </div>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="grid grid-col-1">
              {quizData?.map((quiz: any) => {
                return (
                  <div className="featured-categories-card" key={quiz.id}>
                    <QuizCard
                      id={quiz.id}
                      title={quiz.title}
                      description={quiz.description}
                      bannerImage={quiz.bannerImage}
                      categoryName={quiz.categoryName}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
