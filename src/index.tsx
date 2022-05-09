import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { QuizDataProvider } from "./context/QuizContext";
import { GameProvider } from "./context/GameContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QuizDataProvider>
          <GameProvider>
            <App />
          </GameProvider>
        </QuizDataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
