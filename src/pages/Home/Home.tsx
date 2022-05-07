import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <main className="main-wrapper">
      <section className="section-wrapper container">
        <h2 className="text-left category-title font-weight-500">
          Popular Categories
        </h2>
        <div className="featured-categories-container">
          <div className="grid grid-col-1">
            <div className="featured-categories-card">
              <div className="card quiz-card card-shadow">
                <div className="card-header">
                  <img
                    className="img-responsive"
                    src="https://i0.wp.com/www.opindia.com/wp-content/uploads/2022/01/Untitled-design-13.jpg?fit=700%2C400&ssl=1"
                    alt="shark-tank-india"
                  />
                </div>
                <div className="card-body">
                  <div className="text-badge">Entertainment</div>
                  <h5 className="card-title">Shark Tank India</h5>
                  <p className="card-description">
                    Play this fun quiz to test your expertise!{" "}
                  </p>
                  <a href="./pages/rules/rules.html">
                    <button className="btn btn-play">Play</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="featured-categories-card">
              <div className="card quiz-card card-shadow">
                <div className="card-header">
                  <img
                    className="img-responsive"
                    src="https://images.news18.com/ibnlive/uploads/2021/08/national-flag-16289132954x3.jpg"
                    alt="Indian flag"
                  />
                </div>
                <div className="card-body">
                  <div className="text-badge">Country</div>
                  <h5 className="card-title">Chak De India</h5>
                  <p className="card-description">
                    Test your general knowledge about India.{" "}
                  </p>
                  <button className="btn btn-play">Play</button>
                </div>
              </div>
            </div>
            <div className="featured-categories-card">
              <div className="card quiz-card card-shadow">
                <div className="card-header">
                  <img
                    className="img-responsive"
                    src="https://reactjs.org/logo-og.png"
                    alt="reactjs"
                  />
                </div>
                <div className="card-body">
                  <div className="text-badge">JavaScript Library</div>
                  <h5 className="card-title">ReactJS</h5>
                  <p className="card-description">
                    Take this quiz to test your reactjs knowledge.{" "}
                  </p>
                  <button className="btn btn-play">Play</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
